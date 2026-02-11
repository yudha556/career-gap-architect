"use client";

import { FC } from "react";

interface OverallProgressProps {
  percent: number;
  size?: number;
  strokeWidth?: number; 
  className?: string;
}

export const OverallProgress: FC<OverallProgressProps> = ({
  percent,
  size = 120,
  strokeWidth = 10,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className={`flex items-center justify-center ${className || ""}`}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB" 
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3B82F6" 
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} 
        />
      </svg>
      <div className="absolute text-3xl font-bold text-gray-800">
        {percent}%
      </div>
    </div>
  );
};
