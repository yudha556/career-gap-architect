import { Card } from "@workspace/ui/components/card";
import { Map, MessageSquare } from "lucide-react";

export default function Roadmap() {
    const dummy = [
        { nomor: 1, title: "Master Containerization with Docker", deskriptiopn: "Focus on Docker fundamentals. Learn how to build, run, and manage containers effectively. Practice with real-world examples." },
        { nomor: 2, title: "Master Kubernetes", deskriptiopn: "Learn Kubernetes concepts and how to deploy and manage applications in a containerized environment." },
        { nomor: 3, title: "Advanced DevOps Practices", deskriptiopn: "Explore advanced DevOps practices including CI/CD pipelines, infrastructure as code, and monitoring strategies." },
    ]

    const preparation = [
        { question: "1. What is Docker and how does it work?", deskriptiopn: "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. Containers are lightweight, portable, and ensure consistency across multiple development and release cycles." },
        { question: "2. What are Docker images and containers?", deskriptiopn: "Docker images are read-only templates used to create containers. Containers are running instances of Docker images." },
        { question: "3. How do you build a Docker image?", deskriptiopn: "You build a Docker image using a Dockerfile, which contains instructions for building the image." },
    ]
    return (
        <Card className="w-full p-4 shadow-md flex flex-col gap-8">
            <div className="flex flex-row gap-4 items-center border-b pb-3 border-gray-300">
                <Map className="text-blue-600" />
                <h1 className="text-md font-semibold">Personalized Learning Roadmap</h1>
            </div>

            <div className="flex flex-col gap-8">
                {dummy.map((item) => (
                    <div key={item.nomor} className="flex flex-row gap-6">
                        <div className="flex items-center justify-center min-w-10 h-10 bg-blue-100 rounded-full">
                            <span className="text-blue-600 font-bold">{item.nomor}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-500">{item.deskriptiopn}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-6 mt-5">
                <div className="flex flex-row gap-4 items-center pb-3 border-b border-gray-300">
                    <MessageSquare className="text-blue-600" />
                    <h1 className="text-md font-semibold">Preparation: Top Interview Questions</h1>
                </div>

                <div className="flex flex-col gap-4 ">
                    {preparation.map((item, index) => (
                        <Card key={index} className="p-4 flex flex-col gap-3 bg-accent/30 shadow-md border-l-3 border-blue-600 min-h-30">
                            <h1 className="font-semibold text-md">{item.question}</h1>
                            <p className="text-sm text-gray-500">{item.deskriptiopn}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </Card>
    )
}