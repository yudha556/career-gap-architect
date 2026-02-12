"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";
import { Briefcase, Target, Zap, Clock, Loader2, ArrowUpRight } from "lucide-react";
import { getAnalysisHistory, HistoryItem } from "@/services/analysisService";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAnalysisHistory();
        setHistory(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  // Hitung Statistik Agregat
  const totalAnalysis = history.length;
  const avgScore = totalAnalysis > 0 
    ? Math.round(history.reduce((acc, curr) => acc + curr.matchScore, 0) / totalAnalysis) 
    : 0;
  const highMatches = history.filter(h => h.matchScore >= 80).length;

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader2 className="animate-spin text-primary w-10 h-10" />
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, HR!</h1>
        <p className="text-muted-foreground mt-1">Here's an overview of your resume performance.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-md border-gray-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Analysis</CardTitle>
            <Briefcase className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalAnalysis}</div>
            <p className="text-xs text-muted-foreground mt-1">Attempts recorded</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border-gray-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Avg. Match Score</CardTitle>
            <Target className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{avgScore}%</div>
            <p className="text-xs text-muted-foreground mt-1">Overall proficiency</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border-gray-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Elite Matches</CardTitle>
            <Zap className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">{highMatches}</div>
            <p className="text-xs text-muted-foreground mt-1">Scores above 80%</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card className="shadow-md border-gray-100">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {history.slice(0, 5).map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                onClick={() => router.push(`/analyzer/detail/${item.id}`)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-md ${item.matchScore > 75 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">{item.jobTitle}</p>
                    <p className="text-xs text-muted-foreground">{new Date(item.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-bold ${item.matchScore > 75 ? 'text-green-600' : 'text-primary'}`}>
                    {item.matchScore}%
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                </div>
              </div>
            ))}
            {history.length === 0 && <p className="text-center text-muted-foreground py-8">No activity yet. Go analyze something!</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}