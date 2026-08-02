"use client";

import { Clock3, CheckCircle2, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StudyCardProps {
  id: number;
  subject: string;
  topic: string;
  duration: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
  onComplete: (id: number) => void;
  onSkip: (id: number) => void;
}

export default function StudyCard({
  id,
  subject,
  topic,
  duration,
  priority,
  completed,
  onComplete,
  onSkip,
}: StudyCardProps) {

  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
        completed
          ? "border-green-300 bg-green-50"
          : "border-slate-200 bg-white hover:shadow-xl"
      }`}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-slate-500">{subject}</p>
          <h3 className="mt-1 text-2xl font-bold">{topic}</h3>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor[priority]}`}
        >
          {priority}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-slate-500">
        <Clock3 className="h-4 w-4" />
        {duration}
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between">
          <span>Progress</span>
          <span>{completed ? "100%" : "0%"}</span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              completed ? "w-full bg-green-500" : "w-0 bg-indigo-500"
            }`}
          />
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <Button
          className="flex-1 bg-emerald-500 hover:bg-emerald-600"
          onClick={() => onComplete(id)}
        >
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Complete
        </Button>

        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onSkip(id)}
        >
          <SkipForward className="mr-2 h-4 w-4" />
          Skip
        </Button>
      </div>
    </div>
  );
}