import {
  Flame,
  Target,
  Clock3,
  TrendingUp,
} from "lucide-react";

export default function StatsCard() {
  const stats = [
    {
      title: "Focus Score",
      value: "87",
      icon: Target,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Current Streak",
      value: "12 Days",
      icon: Flame,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Hours Left",
      value: "2h 15m",
      icon: Clock3,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Weekly Progress",
      value: "82%",
      icon: TrendingUp,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">

      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Your Progress
      </h2>

      <div className="space-y-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 hover:bg-slate-100 transition"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="font-semibold text-slate-800">
                    {item.value}
                  </h3>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Weekly Progress Ring */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">

        <p className="text-sm opacity-90">
          Goal Completion
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          82%
        </h3>

        <div className="mt-4 h-2 rounded-full bg-white/30">

          <div className="h-full w-[82%] rounded-full bg-white"></div>

        </div>

      </div>

    </div>
  );
}