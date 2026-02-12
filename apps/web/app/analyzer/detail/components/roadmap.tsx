import { Card } from "@workspace/ui/components/card";
import { Map, MessageSquare, Clock, Lightbulb } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";

interface RoadmapProps {
    roadmap: { step: string; description: string; estimatedTime?: string }[];
    questions: { question: string; starAnswerGuide: string }[];
}

export default function Roadmap({ roadmap, questions }: RoadmapProps) {
    return (
        <Card className="w-full p-4 shadow-md flex flex-col gap-8">
            <div className="flex flex-row gap-4 items-center border-b pb-3 border-gray-300">
                <Map className="text-blue-600" />
                <h1 className="text-md font-semibold">Personalized Learning Roadmap</h1>
            </div>

            <div className="flex flex-col gap-8">
                {roadmap.map((item, index) => (
                    <div key={index} className="flex flex-row gap-6 w-full">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center min-w-10 h-10 bg-blue-100 rounded-full">
                                <span className="text-blue-600 font-bold">{item.step}</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 pb-6 flex-1">
                            <div className="flex flex-row justify-between items-start w-full">
                                <h2 className="font-semibold text-lg">
                                    Phase {item.step}
                                </h2>

                                {item.estimatedTime && (
                                    <Badge variant="secondary" className="text-xs flex gap-1 whitespace-nowrap shrink-0">
                                        <Clock className="w-3 h-3" /> {item.estimatedTime}
                                    </Badge>
                                )}
                            </div>
                            
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 mt-2">
                <div className="flex flex-row gap-4 items-center pb-3 border-b border-gray-300">
                    <MessageSquare className="text-blue-600" />
                    <h1 className="text-md font-semibold">Top Interview Questions (STAR Method)</h1>
                </div>

                <div className="flex flex-col gap-6">
                    {questions.map((q, index) => (
                        <Card key={index} className="p-5 flex flex-col gap-3 bg-white shadow-sm border border-gray-200">
                            <h1 className="font-bold text-md text-gray-800">Q: {q.question}</h1>
                            
                            <div className="flex flex-row gap-3 bg-blue-50 p-3 rounded-md">
                                <Lightbulb className="text-yellow-600 w-5 h-5 min-w-5 mt-0.5" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-bold text-blue-700 uppercase">How to answer (STAR):</span>
                                    <p className="text-sm text-blue-900 leading-relaxed">
                                        {q.starAnswerGuide}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Card>
    )
}