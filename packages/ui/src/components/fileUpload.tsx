"use client";

import { Button } from "@workspace/ui/components/button";
import { Upload } from "lucide-react";
import { useState, FC, useRef } from "react";

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
  
  // Kita pakai Ref untuk memicu input file secara manual
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={`flex flex-col gap-2 w-full ${className || ""}`}>
      {/* Button sekarang punya onClick sendiri */}
      <Button
          type="button" // PENTING: Biar gak submit form kalau ada di dalam <form>
          variant="default"
          className="flex h-9 cursor-pointer items-center gap-2 w-full"
          onClick={handleClick} // Trigger input file
      >
          <Upload className="w-5 h-5" /> 
          {fileName ? (fileName.length > 20 ? fileName.substring(0, 15) + "..." : fileName) : label}
      </Button>

      <input
        ref={inputRef} 
        type="file"
        accept=".pdf"
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