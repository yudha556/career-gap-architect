import { Card } from "@workspace/ui/components/card";
import { OverallProgress } from "./progress";

export default function Overall({ percent }: { percent: number }) {
    return (
        <Card className="p-4 flex flex-col gap-4 items-center justify-center shadow-md">
            <h1 className="text-md font-semibold">Overall Match</h1>
            <OverallProgress percent={percent} />
            <p className="text-gray-500 text-md">
                {percent > 70 ? "Great match!" : "Good match, but missing key technical skills"}
            </p>
        </Card>
    )
}