/*
  Warnings:

  - You are about to drop the `AnalysisCache` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AnalysisCache";

-- CreateTable
CREATE TABLE "AnalysisResult" (
    "id" TEXT NOT NULL,
    "inputHash" TEXT NOT NULL,
    "matchScore" INTEGER NOT NULL DEFAULT 0,
    "jobTitle" TEXT NOT NULL DEFAULT 'General Application',
    "resumeText" TEXT NOT NULL,
    "jobDescText" TEXT NOT NULL,
    "resultJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AnalysisResult_inputHash_key" ON "AnalysisResult"("inputHash");

-- CreateIndex
CREATE INDEX "AnalysisResult_matchScore_idx" ON "AnalysisResult"("matchScore");

-- CreateIndex
CREATE INDEX "AnalysisResult_createdAt_idx" ON "AnalysisResult"("createdAt");
