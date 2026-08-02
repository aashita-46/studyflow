"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const steps = [
  "Welcome",
  "Goal",
  "Subjects",
  "Schedule",
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-indigo-100 flex items-center justify-center px-6">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-10 shadow-xl">

        <h2 className="text-3xl font-bold text-slate-800">
          Welcome to StudyFlow ✨
        </h2>

        <p className="mt-2 text-slate-500">
          Step {step + 1} of {steps.length}
        </p>

        <div className="mt-8 h-2 rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />

        </div>

        <div className="mt-10">

          {step === 0 && (
            <>
              <h3 className="text-xl font-semibold">
                What's your name?
              </h3>

              <input
                className="mt-4 w-full rounded-xl border p-4"
                placeholder="Abhishikth"
              />
            </>
          )}

          {step === 1 && (
            <>
              <h3 className="text-xl font-semibold">
                What's your goal?
              </h3>

              <select className="mt-4 w-full rounded-xl border p-4">

                <option>Software Engineer</option>

                <option>AI Engineer</option>

                <option>Research</option>

              </select>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-xl font-semibold">
                Subjects
              </h3>

              <textarea
                className="mt-4 h-40 w-full rounded-xl border p-4"
                placeholder="DSA, Agentic AI, Research Papers..."
              />
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-xl font-semibold">
                Hours available every day
              </h3>

              <input
                type="number"
                className="mt-4 w-full rounded-xl border p-4"
                placeholder="3"
              />
            </>
          )}

        </div>

        <div className="mt-12 flex justify-between">

          <Button
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            Back
          </Button>

          {step < steps.length - 1 ? (
            <Button onClick={() => setStep(step + 1)}>
              Next
            </Button>
          ) : (
            <Button onClick={() => router.push("/generate")}>
              Generate My Study Flow
            </Button>
          )}

        </div>

      </div>

    </main>
  );
}