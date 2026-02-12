import { Card } from "@workspace/ui/components/card";
import { PenTool, ArrowRight } from "lucide-react";

interface RefinementProps {
    data?: { 
        originalText: string;
        suggestedText: string;
        reason: string;
    }[];
}

export default function ResumeRefinement({ data }: RefinementProps) {
    if (!data || data.length === 0) return null;

    return (
        <Card className="p-4 flex flex-col gap-4 w-full shadow-md">
            <div className="flex flex-row gap-4 items-center">
                <PenTool className="text-purple-600" />
                <h1 className="text-md font-semibold text-purple-600">Resume Refinements (ATS Fix)</h1>
            </div>

            <div className="flex flex-col gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 p-3 bg-white shadow-md rounded-lg border border-gray-100">
                        <div className="text-xs font-semibold text-gray-500 uppercase">Reason: {item.reason}</div>
                        
                        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                            <div className="p-2 bg-red-50 text-red-600 text-xs rounded w-full md:w-1/2 line-through decoration-red-400/50">
                                {item.originalText}
                            </div>
                            <ArrowRight className="hidden md:block text-gray-400 w-4 h-4 min-w-4" />
                            <div className="p-2 bg-green-50 text-green-700 text-xs font-medium rounded w-full md:w-1/2">
                                {item.suggestedText}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}