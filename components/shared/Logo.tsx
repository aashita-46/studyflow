import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
        <Sparkles className="h-5 w-5 text-white" />
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800">
          StudyFlow
        </h2>

        <p className="text-xs text-slate-500">
          AI Study Planner
        </p>
      </div>
    </Link>
  );
}