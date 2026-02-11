import { Body, Controller, Post } from "@nestjs/common";
import { AnalysisService } from "./analysis.service";

@Controller("analysis")
export class AnalysisController {
  constructor(private readonly analysisService: AnalysisService) {}

  @Post()
  analyze(
    @Body()
    body: { resumeText: string; jobDescText: string }
  ) {
    return this.analysisService.analyze(body.resumeText, body.jobDescText);
  }
}
