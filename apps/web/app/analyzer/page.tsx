"use client";

import { Card } from "@workspace/ui/components/card";
import { ClipboardList, FileText, Sparkles,} from "lucide-react";
import { FileUpload } from "@workspace/ui/components/fileUpload";
import { Label } from "@workspace/ui/components/label";
import { FieldLabel } from "@workspace/ui/components/field";
import { Textarea } from "@workspace/ui/components/textarea";
import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";

export default function AnalyzerPage() {
  const router = useRouter();
  const handleFileSelect = (file: File) => {
    console.log("Selected resume file:", file.name);

  };

  return (
    <div className="flex flex-col gap-6 mb-17.5">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Gap Architect Analyzer</h1>
        <p className="text-muted-foreground">
          Dual-pane editor to compare resume
        </p>
      </div>

      <div className="flex flex-row gap-6 justify-between">
        <Card className="p-6 flex flex-col gap-8 w-full shadow-md">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-accent/70 rounded-sm">
              <FileText className="text-blue-600" />
            </div>
            <p className="text-lg font-medium">Upload Your Resume</p>
          </div>

          <FileUpload onFileSelect={handleFileSelect} className="w-full hover:shadow-md hover:translate-y-1 transform-all duration-150"/>
          <Label className="flex flex-col gap-3 ">
            <FieldLabel htmlFor="textarea" className="mr-auto">You can upload your resume or paste the text direcly below.</FieldLabel>
            <Textarea id="textarea" placeholder="paste your resume here..." className="h-50"/>
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
            <Textarea id="textarea" placeholder="paste your target job description here..." className="h-75"/>
          </Label>

        </Card>
      </div>

      <Card className="flex justify-center items-center w-full h-full p-14 shadow-md">
        <Button onClick={() => router.push("/analyzer/detail")} variant={"default"} size={"lg"} className="flex flex-row gap-2 h-14 w-full max-w-sm cursor-pointer hover:shadow-md hover:translate-y-1">
          <Sparkles />
          Analyze My Gap!
        </Button>
      </Card>
    </div>
  );
}
