"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@workspace/ui/components/card";
import { Star, Loader2, Calendar, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAnalysisHistory, HistoryItem } from "@/services/analysisService";

export default function SavedGuidesPage() {
  const router = useRouter();
  const [guides, setGuides] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedGuides = async () => {
      try {
        const data = await getAnalysisHistory();
        const filtered = data.filter((item) => item.matchScore >= 80);
        setGuides(filtered);
      } catch (err) {
        console.error("Failed to load guides:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSavedGuides();
  }, []);

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <Loader2 className="animate-spin text-primary w-10 h-10" />
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Saved Guides</h1>
          <p className="text-muted-foreground mt-1">
            Your top-tier analysis results and curated learning roadmaps.
          </p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-full">
            <Star className="text-yellow-500 fill-yellow-500 w-6 h-6" />
        </div>
      </div>

      {guides.length === 0 ? (
        <Card className="p-20 text-center border-dashed flex flex-col items-center gap-4">
            <BookOpen className="w-12 h-12 text-gray-200" />
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg text-gray-400">No high-score guides yet.</p>
                <p className="text-sm text-gray-400">Achieve a match score of 80% or higher to see them here.</p>
            </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((item) => (
            <Card 
              key={item.id} 
              className="group relative cursor-pointer hover:shadow-lg transition-all border-gray-100 bg-gradient-to-br from-white to-gray-50/50"
              onClick={() => router.push(`/analyzer/detail/${item.id}`)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {item.jobTitle}
                  </CardTitle>
                  <p className="text-xs font-semibold text-blue-600 bg-blue-50 w-fit px-2 py-0.5 rounded uppercase">
                    Elite Match
                  </p>
                </div>
                <div className="relative flex items-center justify-center min-w-14 h-14 rounded-full border-4 border-green-100 bg-white">
                  <span className="text-sm font-bold text-green-600">
                    {item.matchScore}%
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground gap-2 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>Saved on {new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}