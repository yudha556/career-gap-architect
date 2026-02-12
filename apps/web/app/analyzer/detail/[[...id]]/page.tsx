"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { getAnalysisDetail } from "@/services/analysisService";
import Overall from "../components/overall";
import MissingSkills from "../components/missingSkils";
import Roadmap from "../components/roadmap";
import ResumeRefinement from "../components/resumeRefinement";

export default function DetailPage() {
  const params = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        if (params?.id) {
          const res = await getAnalysisDetail(params.id as string);

          const aiData =
            typeof res.resultJson === "string"
              ? JSON.parse(res.resultJson)
              : res.resultJson;

          setData({ ...res, ...aiData });
        } else {
          const savedData = localStorage.getItem("latest_analysis");
          if (savedData) {
            const parsed = JSON.parse(savedData);
            const finalData = parsed.resultJson
              ? {
                  ...parsed,
                  ...(typeof parsed.resultJson === "string"
                    ? JSON.parse(parsed.resultJson)
                    : parsed.resultJson),
                }
              : parsed;
            setData(finalData);
          }
        }
      } catch (err) {
        console.error("Gagal memuat data detail:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [params?.id]);

  if (loading)
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-blue-600 w-10 h-10" />
        <p className="text-gray-500">Fetching analysis details...</p>
      </div>
    );

  if (!data)
    return <div className="p-20 text-center">Data tidak ditemukan.</div>;

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mb-20">
      <div className="flex flex-col gap-6 w-full lg:max-w-sm">
        <Overall percent={data.matchScore || 0} />
        <MissingSkills skills={data.missingSkills || []} />
        <ResumeRefinement data={data.resumeRefinements || []} />
      </div>

      <div className="flex-1">
        <Roadmap
          roadmap={data.learningRoadmap || []}
          questions={data.interviewQuestions || []}
        />
      </div>
    </div>
  );
}
