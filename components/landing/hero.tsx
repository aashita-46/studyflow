import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-lg">

          <Sparkles className="h-4 w-4 text-orange-400" />

          <span className="text-sm">
            AI Powered Study Planner
          </span>

        </div>

        <h1 className="text-6xl font-bold leading-tight text-slate-900">

          Never Wonder

          <br />

          What To Study

          <span className="text-indigo-600">
            {" "}
            Again.
          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">

          StudyFlow automatically creates your study plan
          every morning based on your goals,
          deadlines and previous progress.

        </p>

        <div className="mt-12 flex justify-center gap-5">
            <Link href="/onboarding">
            <Button className="rounded-xl bg-indigo-600 px-8 py-6 text-lg">
              Get Started
            </Button>
          </Link>

          <Button
            variant="outline"
            className="rounded-xl px-8 py-6 text-lg"
          >
            Learn More
          </Button>

        </div>

      </div>

    </section>
  );
}