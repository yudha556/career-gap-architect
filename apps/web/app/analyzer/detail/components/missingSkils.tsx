import { Card } from "@workspace/ui/components/card";
import { CircleAlert } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";

export default function MissingSkills({ skills }: { skills: string[] }) {
  return (
    <Card className="p-4 flex flex-col gap-4 w-full shadow-md">
      <div className="flex flex-row gap-4 items-center">
        <CircleAlert className="text-red-600" />
        <h1 className="text-md font-semibold text-red-600">Missing Skills</h1>
      </div>

      <div className="flex flex-wrap gap-2">
        {(skills || []).length > 0 ? (
          skills.map((skill, index) => (
            <Badge key={index} variant="destructive" className="h-8 px-6">
              {skill}
            </Badge>
          ))
        ) : (
          <p className="text-xs text-gray-400">No missing skills detected.</p>
        )}
      </div>

      <p className="text-gray-500 text-sm">
        These skills appear frequently in job descriptions for the role you're
        targeting.
      </p>
    </Card>
  );
}
