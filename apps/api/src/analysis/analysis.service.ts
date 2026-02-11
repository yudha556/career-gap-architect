import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import OpenAI from 'openai';
import { z } from 'zod';
import * as crypto from 'crypto';

const AnalysisResultSchema = z.object({
  matchScore: z.number().min(0).max(100),
  missingSkills: z.array(z.string()),
  learningRoadmap: z
    .array(
      z.object({
        step: z.string(),
        description: z.string(),
      }),
    )
    .length(3),
  interviewQuestions: z.array(z.string()).length(3),
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

  async processGapAnalysis(file: Express.Multer.File, jd: string) {
    const resumeText = await this.extractText(file);

    const inputHash = crypto
      .createHash('sha256')
      .update(resumeText + jd)
      .digest('hex');

    const cached = await this.prisma.analysisCache.findUnique({
      where: { inputHash },
    });

    if (cached) {
      this.logger.log(`CACHE HIT: ${inputHash}`);
      return cached.resultJson; 
    }

    this.logger.log(`CACHE MISS: Processing AI...`);
    const aiResult = await this.callGroqAI(resumeText, jd);

    await this.prisma.analysisCache.create({
      data: {
        inputHash,
        resumeText: resumeText,
        jobDescText: jd,
        resultJson: aiResult as any,
      },
    });

    return aiResult;
  }

  private async extractText(file: Express.Multer.File): Promise<string> {
    if (!file || file.mimetype !== 'application/pdf') {
      throw new BadRequestException('Please upload a PDF file.');
    }

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
            content: `You are a Career Gap Architect. Return ONLY valid JSON:
            {
              "matchScore": number (0-100),
              "missingSkills": ["skill1"],
              "learningRoadmap": [{"step": "1", "description": "..."}],
              "interviewQuestions": ["q1"]
            }`,
          },
          {
            role: 'user',
            content: `RESUME:\n${resume.substring(0, 3000)}\n\nJD:\n${jd.substring(0, 2000)}`,
          },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.1,
      });

      const content = completion.choices[0].message.content || '{}';
      let parsed = JSON.parse(content);
      if (Array.isArray(parsed.learningRoadmap)) {
        parsed.learningRoadmap = parsed.learningRoadmap.slice(0, 3);
      }
      
      if (Array.isArray(parsed.interviewQuestions)) {
        parsed.interviewQuestions = parsed.interviewQuestions.slice(0, 3);
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
}