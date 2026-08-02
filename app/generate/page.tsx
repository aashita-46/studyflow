"use client";

import { Brain, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  "Analyzing your goals...",
  "Checking available study hours...",
  "Prioritizing subjects...",
  "Building today's study plan...",
];

export default function GeneratePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [currentStep, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-indigo-100 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl">

        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
            <Brain className="h-10 w-10 animate-pulse text-indigo-600" />
          </div>
        </div>

        <h1 className="mt-8 text-center text-3xl font-bold">
          Creating Your Study Flow
        </h1>

        <p className="mt-3 text-center text-slate-500">
          StudyFlow AI is building today's personalized plan.
        </p>

        <div className="mt-10 space-y-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`flex items-center gap-4 rounded-2xl p-4 transition-all ${
                index <= currentStep
                  ? "bg-green-50"
                  : "bg-slate-100"
              }`}
            >
              <CheckCircle2
                className={`h-5 w-5 ${
                  index <= currentStep
                    ? "text-green-600"
                    : "text-slate-400"
                }`}
              />

              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-1000"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

      </div>
    </main>
  );
}