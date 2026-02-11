import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health/db')
  async dbCheck() {
    try {
      const count = await this.appService.getAnalysisCacheCount();
      return {
        ok: true,
        analysisCacheCount: count,
      };
    } catch (error) {
      return {
        ok: false,
        error: error instanceof Error ? error.message : 'Database connection failed',
      };
    }
  }
}