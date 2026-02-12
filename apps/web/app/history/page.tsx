"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";
import { Calendar, Loader2, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAnalysisHistory, HistoryItem } from "@/services/analysisService";

export default function HistoryPage() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getAnalysisHistory();
        setHistory(data);
      } catch (err) {
        console.error("Failed to load history:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader2 className="animate-spin text-primary w-10 h-10" />
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analysis History</h1>
        <p className="text-muted-foreground mt-1">
          View your past resume gap analyses and track your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {history.map((item) => (
          <Card 
            key={item.id} 
            className="group relative cursor-pointer hover:shadow-lg transition-all duration-300 border-gray-100"
            onClick={() => {
                localStorage.removeItem("latest_analysis");
                router.push(`/analyzer/detail/${item.id}`);
            }}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <div className="flex flex-col gap-1">
                <CardTitle className="text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  {item.jobTitle}
                </CardTitle>
                <p className="text-sm text-muted-foreground">General Application</p>
              </div>
              
              <div className={`relative flex items-center justify-center min-w-14 h-14 rounded-full border-4 ${
                item.matchScore > 75 ? 'border-green-100' : item.matchScore > 50 ? 'border-yellow-100' : 'border-red-100'
              }`}>
                <span className={`text-sm font-bold ${
                  item.matchScore > 75 ? 'text-green-600' : item.matchScore > 50 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {item.matchScore}%
                </span>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(item.createdAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}