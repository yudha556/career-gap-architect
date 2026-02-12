import { apiAxios } from '@/lib/apiAxios';

export interface AnalysisResult {
  id: string;
  matchScore: number;
  jobTitle: string;
  resumeText: string;
  createdAt: string;
  resultJson: string | any; 
  missingSkills?: string[];
  learningRoadmap?: { step: string; description: string }[];
  interviewQuestions?: { question: string; starAnswerGuide: string }[];
  resumeRefinements?: { originalText: string; suggestedText: string; reason: string }[];
}

export interface HistoryItem {
  id: string;
  jobTitle: string;
  matchScore: number;
  createdAt: string;
}

export const analyzeGap = async (file: File | null, resumeText: string, jobDescription: string) => {
  const formData = new FormData();
  if (file) formData.append('file', file);
  if (resumeText) formData.append('resumeText', resumeText);
  formData.append('jobDescription', jobDescription);

  const res = await apiAxios.post<AnalysisResult>('/analysis', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const getAnalysisHistory = async () => {
  const res = await apiAxios.get<HistoryItem[]>('/analysis/history');
  return res.data;
};

export const getAnalysisDetail = async (id: string) => {
  const res = await apiAxios.get<AnalysisResult>(`/analysis/${id}`);
  return res.data;
};