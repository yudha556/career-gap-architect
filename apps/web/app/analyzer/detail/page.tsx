import MissingSkills from "./components/missingSkils";
import Overall from "./components/overall";
import Roadmap from "./components/roadmap";

export default function DetailPage() {
    return (
        <div className="w-full flex flex-row justify-between gap-6 mb-17.5">
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <Overall />
                <MissingSkills />
            </div>
            <Roadmap />
        </div>
    )
}