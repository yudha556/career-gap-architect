import { Card } from "@workspace/ui/components/card";
import { CircleAlert } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";

export default function MissingSkills() {
    return (
        <Card className="p-4 flex flex-col gap-4 w-full shadow-md">
            <div className="flex flex-row gap-4 items-center">
                <CircleAlert className="text-red-600" />
                <h1 className="text-md font-semibold text-red-600">Missing Skills</h1>
            </div>

            <div className="flex flex-wrap gap-2">
                <Badge variant="destructive" className="h-8 px-6">Docker</Badge>
                <Badge variant="destructive" className="h-8 px-6">Kubernetes</Badge>
                <Badge variant="destructive" className="h-8 px-6">AWS</Badge>
                <Badge variant="destructive" className="h-8 px-6">Terraform</Badge>
                <Badge variant="destructive" className="h-8 px-6">CI/CD</Badge>
                <Badge variant="destructive" className="h-8 px-6">Microservices</Badge>
            </div>

            <p className="text-gray-500 text-sm">These skills appear frequently in job descriptions for the role you're targeting.</p>
        </Card>
    )
}