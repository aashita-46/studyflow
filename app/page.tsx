import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-indigo-100">

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full bg-white px-5 py-2 shadow-md">
          ✨ AI Powered Study Planner
        </div>

        <h1 className="text-6xl font-bold text-slate-800 leading-tight">

          Never Wonder

          <br />

          What To Study

          <span className="text-indigo-600"> Again.</span>

        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-600">

          StudyFlow automatically builds your study plan every morning
          based on your goals, deadlines and progress.

        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/onboarding"
            className="rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

          <button
            className="rounded-2xl bg-white px-8 py-4 shadow-md hover:shadow-lg transition"
          >
            Learn More
          </button>

        </div>

      </section>

    </main>
  );
}