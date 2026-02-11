import { Controller, Post, UseInterceptors, UploadedFile, Body, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AnalysisService } from './analysis.service';
import type { Express } from 'express'; 

@Controller('analysis')
export class AnalysisController {
  constructor(private readonly service: AnalysisService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async analyze(
    @UploadedFile() file: Express.Multer.File,
    @Body('jobDescription') jd: string,
  ) {
    if (!file || !jd) throw new BadRequestException('File and Job Description are required');
    return this.service.processGapAnalysis(file, jd);
  }
}