import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import crypto from 'crypto';

@Injectable()
export class AnalysisService {
  constructor(private prisma: PrismaService) {}

  private hashInput(resume: string, jd: string) {
    return crypto
      .createHash('sha256')
      .update(resume + jd)
      .digest('hex');
  }

  async analyze(resumeText: string, jobDescText: string) {
    const inputHash = this.hashInput(resumeText, jobDescText);

    // 1️⃣ CHECK CACHE
    const cached = await this.prisma.analysisCache.findUnique({
      where: { inputHash },
    });

    if (cached) {
      return {
        source: 'cache',
        result: cached.resultJson,
      };
    }

    // 2️⃣ (NANTI) CALL AI
    const aiResult = {
      missingSkills: [],
      steps: [],
      interviewQuestions: [],
    };

    // 3️⃣ SAVE CACHE
    await this.prisma.analysisCache.create({
      data: {
        inputHash,
        resumeText,
        jobDescText,
        resultJson: aiResult,
      },
    });

    return {
      source: 'ai',
      result: aiResult,
    };
  }
}
