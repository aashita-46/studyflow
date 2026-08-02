"use client";

import { Trophy, Flame } from "lucide-react";

interface ProgressWidgetProps {
  completed: number;
  total: number;
}

export default function ProgressWidget({
  completed,
  total,
}: ProgressWidgetProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm opacity-90">
            Today's Progress
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {percentage}%
          </h2>

        </div>

        <Trophy className="h-10 w-10" />

      </div>

      <div className="mt-6 h-3 rounded-full bg-white/30">

        <div
          className="h-full rounded-full bg-white transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="mt-5 flex items-center gap-2 text-sm">

        <Flame className="h-4 w-4" />

        {completed} of {total} sessions completed

      </div>

    </div>
  );
}