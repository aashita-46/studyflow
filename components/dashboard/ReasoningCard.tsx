import {
  Brain,
  CalendarDays,
  Clock3,
  Target,
  Sparkles,
} from "lucide-react";

export default function ReasoningCard() {
  const reasons = [
    {
      icon: CalendarDays,
      title: "Interview Soon",
      description: "Your placement interview is in 18 days.",
    },
    {
      icon: Target,
      title: "High Priority",
      description: "DSA was skipped yesterday, so it's scheduled first.",
    },
    {
      icon: Clock3,
      title: "Peak Productivity",
      description: "Morning sessions are reserved for deep-focus work.",
    },
    {
      icon: Sparkles,
      title: "Balanced Learning",
      description: "Research papers are moved to the evening for lighter cognitive load.",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">

          <Brain className="h-6 w-6 text-indigo-600" />

        </div>

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            AI Reasoning
          </h2>

          <p className="text-sm text-slate-500">
            Why today's schedule was created
          </p>

        </div>

      </div>

      {/* Reasons */}

      <div className="mt-8 space-y-5">

        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              className="flex gap-4 rounded-2xl bg-slate-50 p-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <Icon className="h-5 w-5 text-indigo-600" />
              </div>

              <div>

                <h3 className="font-semibold text-slate-800">
                  {reason.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {reason.description}
                </p>

              </div>
            </div>
          );
        })}

      </div>

      {/* AI Confidence */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-5 text-white">

        <div className="flex items-center justify-between">

          <span>AI Confidence</span>

          <span className="text-2xl font-bold">
            96%
          </span>

        </div>

        <div className="mt-4 h-2 rounded-full bg-white/30">

          <div className="h-full w-[96%] rounded-full bg-white"></div>

        </div>

      </div>

    </div>
  );
}