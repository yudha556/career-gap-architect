import { 
  Controller, 
  Post, 
  Get, 
  Param, 
  UseInterceptors, 
  UploadedFile, 
  Body, 
  BadRequestException 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AnalysisService } from './analysis.service';

@Controller('analysis')
export class AnalysisController {
  constructor(private readonly service: AnalysisService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async analyze(
    @UploadedFile() file: Express.Multer.File | undefined, 
    @Body('jobDescription') jd: string,
    @Body('resumeText') resumeText: string,
  ) {
    if (!jd) throw new BadRequestException('Job Description is required');
    if (!file && (!resumeText || resumeText.trim() === '')) {
       throw new BadRequestException('Please upload a Resume PDF or paste your Resume text.');
    }

    return this.service.processGapAnalysis(file, resumeText, jd);
  }

  @Get('history')
  async getHistory() {
    return this.service.getHistory();
  }

  @Get(':id')
  async getDetail(@Param('id') id: string) {
    return this.service.getAnalysisById(id);
  }
}