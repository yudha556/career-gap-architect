import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import OpenAI from 'openai';
import { z } from 'zod';
import * as crypto from 'crypto';

const AnalysisResultSchema = z.object({
  matchScore: z.number().min(0).max(100),
  missingSkills: z.array(z.string()),
  learningRoadmap: z.array(z.object({
    step: z.string(),
    description: z.string(),
    estimatedTime: z.string().optional(), 
  })).max(5), 
  
  interviewQuestions: z.array(z.object({
    question: z.string(),
    starAnswerGuide: z.string(), 
  })).max(3),

  resumeRefinements: z.array(z.object({
    originalText: z.string(),
    suggestedText: z.string(),
    reason: z.string(),
  })).optional(),
});

@Injectable()
export class AnalysisService {
  private groq: OpenAI;
  private readonly logger = new Logger(AnalysisService.name);

  constructor(private prisma: PrismaService) {
    this.groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    });
  }

async processGapAnalysis(file: Express.Multer.File | undefined, resumeTextParam: string, jd: string) {
    let finalResumeText = "";

    if (file && file.mimetype === 'application/pdf') {
      finalResumeText = await this.extractText(file);
    } 
    else if (resumeTextParam && resumeTextParam.trim().length > 0) {
      finalResumeText = resumeTextParam;
    } 
    else {
      throw new BadRequestException('Please provide a Resume (Upload PDF or Paste Text).');
    }

    const inputHash = crypto
      .createHash('sha256')
      .update(finalResumeText + jd)
      .digest('hex');

    const cached = await this.prisma.analysisResult.findUnique({
      where: { inputHash },
    });

    if (cached) {
      this.logger.log(`CACHE HIT: ${inputHash}`);
      return cached.resultJson as any; 
    }

    this.logger.log(`CACHE MISS: Processing AI...`);
    const aiResult = await this.callGroqAI(finalResumeText, jd);
    const extractedTitle = jd.split('\n')[0].substring(0, 100).trim() || "General Application";

    await this.prisma.analysisResult.create({
      data: {
        inputHash,
        resumeText: finalResumeText,
        jobDescText: jd,
        resultJson: aiResult as any,
        matchScore: aiResult.matchScore, 
        jobTitle: extractedTitle,       
      },
    });

    return aiResult;
  }

  private async extractText(file: Express.Multer.File): Promise<string> {
    const pdf = require('pdf-parse'); 
    const data = await pdf(file.buffer);
    return data.text.trim();
  }

  private async callGroqAI(resume: string, jd: string) {
    try {
      const completion = await this.groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile', 
        messages: [
          {
            role: 'system',
            content: `You are an Expert Tech Recruiter & Career Coach. 
            Analyze the gap between the Candidate's Resume and the Job Description.

            CRITICAL SCORING RULES (Be Strict):
            - Score < 50: Missing core hard skills (e.g., JD wants Node.js, Candidate only knows Python).
            - Score 50-70: Has basic skills but missing frameworks or experience level.
            - Score 71-89: Strong match, only minor gaps.
            - Score > 90: Perfect match (Unicorn candidate).
            - DO NOT default to 80. Calculate strictly based on keyword matching.

            INSTRUCTIONS:
            1. Analyze accurately based on keywords.
            2. For "interviewQuestions", provide 3 hard technical questions. In "starAnswerGuide", explain HOW to answer using the STAR method.
            3. For "resumeRefinements", find 2-3 sentences in the resume that are weak. Suggest a professional rewrite.

            Return ONLY valid JSON matching this structure:
            {
              "matchScore": number (0-100),
              "missingSkills": ["skill1", "skill2"],
              "learningRoadmap": [{"step": "1", "description": "...", "estimatedTime": "..."}],
              "interviewQuestions": [{"question": "...", "starAnswerGuide": "..."}],
              "resumeRefinements": [{"originalText": "...", "suggestedText": "...", "reason": "..."}]
            }`,
          },
          {
            role: 'user',
            content: `RESUME CONTENT:\n${resume.substring(0, 5000)}\n\nJOB DESCRIPTION:\n${jd.substring(0, 3000)}`,
          },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.2, 
      });

      const content = completion.choices[0].message.content || '{}';
      let parsed = JSON.parse(content);

      if (Array.isArray(parsed.learningRoadmap)) {
        parsed.learningRoadmap = parsed.learningRoadmap.slice(0, 5); 
      }
      
      if (Array.isArray(parsed.interviewQuestions)) {
        parsed.interviewQuestions = parsed.interviewQuestions.slice(0, 3); 
      }

      if (Array.isArray(parsed.resumeRefinements)) {
        parsed.resumeRefinements = parsed.resumeRefinements.slice(0, 3); 
      }

      return AnalysisResultSchema.parse(parsed);
      
    } catch (error) {
      this.logger.error(error);
      
      if (error instanceof z.ZodError) {
        throw new InternalServerErrorException('AI Validation Error: ' + JSON.stringify(error.flatten()));
      }
      
      throw new InternalServerErrorException('AI processing failed.');
    }
  }
  async getHistory() {
    return this.prisma.analysisResult.findMany({
      orderBy: { createdAt: 'desc' }, 
      select: {
        id: true,
        jobTitle: true,
        matchScore: true,
        createdAt: true,
      },
    });
  }

  async getAnalysisById(id: string) {
    return this.prisma.analysisResult.findUnique({
      where: { id },
    });
  }
}