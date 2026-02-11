import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalysisModule } from './analysis/analysis.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AnalysisModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}