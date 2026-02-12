"use client";

import { useState, useRef } from "react"; 
import { Card } from "@workspace/ui/components/card";
import { ClipboardList, FileText, Sparkles, Loader2, Upload } from "lucide-react"; 
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";
import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";
import { analyzeGap } from "@/services/analysisService"; 

export default function AnalyzerPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
       setFile(e.target.files[0]);
    }
  };

const handleAnalyze = async () => {
  if (!jobDesc) {
      alert("Job Description is required!");
      return;
  }
  if (!file && !resumeText.trim()) {
      alert("Please Upload Resume PDF or Paste Text!");
      return;
  }

  setIsLoading(true);
  try {
    const result = await analyzeGap(file, resumeText, jobDesc);
    
    if (result) {
      localStorage.setItem("latest_analysis", JSON.stringify(result));
      router.push(`/analyzer/detail`);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="flex flex-col gap-6 mb-17.5">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Gap Architect Analyzer</h1>
        <p className="text-muted-foreground">Dual-pane editor to compare resume</p>
      </div>

      <div className="flex flex-row gap-6 justify-between">
        <Card className="p-6 flex flex-col gap-8 w-full shadow-md">
            <div className="flex flex-row gap-4 items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/70 rounded-sm">
                   <FileText className="text-blue-600" />
                </div>
                <p className="text-lg font-medium">Upload / Paste Resume</p>
            </div>

            <div className="flex flex-col gap-2">
                <input 
                    type="file" 
                    ref={fileInputRef}
                    accept=".pdf"
                    className="hidden" 
                    onChange={handleFileSelect}
                />
                <Button 
                    variant="outline" 
                    onClick={() => fileInputRef.current?.click()} 
                    className="w-full border-dashed border-2 h-12 cursor-pointer hover:bg-accent/50"
                >
                    <Upload className="mr-2 h-4 w-4"/>
                    {file ? file.name : "Click to Upload PDF"}
                </Button>
            </div>

            <div className="text-center text-sm text-gray-400">- OR -</div>

            <Label className="flex flex-col gap-3">
                <Textarea 
                    placeholder="Paste resume text here if you don't have PDF..." 
                    className="h-40"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    disabled={!!file}
                />
            </Label>
        </Card>

        <Card className="p-6 w-full shadow-md flex flex-col gap-8">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-sm">
              <ClipboardList className="text-blue-600" />
            </div>
            <p className="text-lg font-medium">Paste Target Job Description</p>
          </div>
          <Label className="flex flex-col gap-3 ">
            <Textarea 
              placeholder="Paste target job description here..." 
              className="h-80"
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
            />
          </Label>
        </Card>
      </div>

      <Card className="flex justify-center items-center w-full h-full p-14 shadow-md">
        <Button 
            onClick={handleAnalyze} 
            disabled={isLoading}  
            variant={"default"} size={"lg"} className="flex flex-row gap-2 h-14 w-full max-w-sm cursor-pointer hover:shadow-md hover:translate-y-1">
          {isLoading ? <Loader2 className="animate-spin"/> : <Sparkles />}
          {isLoading ? "Analyzing..." : "Analyze My Gap!"}
        </Button>
      </Card>
    </div>
  );
}