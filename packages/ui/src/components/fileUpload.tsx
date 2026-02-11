"use client";

import { Button } from "@workspace/ui/components/button";
import { Upload } from "lucide-react";
import { useState, FC } from "react";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  className?: string;
  label?: string; 
}

export const FileUpload: FC<FileUploadProps> = ({
  onFileSelect,
  className,
  label = "Upload Resume",
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className={`flex flex-col gap-2 w-full ${className || ""}`}>
      <label htmlFor="resume-upload" className="cursor-pointer">
        <Button
          variant="default"
          className="flex h-9 cursor-pointer items-center gap-2 w-full" 
        >
          <Upload className="w-5 h-5 " /> 
          {fileName ? `File: ${fileName}` : label}
        </Button>
      </label>
      <input
        id="resume-upload"
        type="file"
        accept=".pdf,.docx,.txt"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFileName(file.name);
            if (onFileSelect) onFileSelect(file);
          }
        }}
      />
    </div>
  );
};
