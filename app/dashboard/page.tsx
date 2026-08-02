"use client";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StudyCard from "@/components/study/StudyCard";
import ReasoningCard from "@/components/dashboard/ReasoningCard";
import StatsCard from "@/components/dashboard/StatsCard";
import { studyPlan } from "@/lib/mockPlan";

export default function DashboardPage() {
    const [tasks, setTasks] = useState(studyPlan);
    const handleComplete = (id: number) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? { ...task, completed: true }
        : task
    )
  );
};

const handleSkip = (id: number) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? { ...task, completed: false }
        : task
    )
  );
};
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <DashboardHeader />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Section */}
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800">
              Today's Study Flow
            </h2>

            {tasks.map((task) => (
              <StudyCard
                key={task.id}
                id={task.id}
                subject={task.subject}
                topic={task.topic}
                duration={`${task.duration} min`}
                priority={task.priority}
                completed={task.completed}
                onComplete={handleComplete}
                onSkip={handleSkip}
              />
            ))}
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <StatsCard />
            <ReasoningCard />
          </div>
        </div>
      </main>
    </div>
  );
}