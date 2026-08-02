import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">

      <div>

        <p className="text-slate-500">
          Good Morning 👋
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          Welcome back, Aashita
        </h1>

      </div>

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

          <Search className="h-5 w-5 text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-52 bg-transparent outline-none placeholder:text-slate-400"
          />

        </div>

        {/* Notification */}

        <button className="rounded-2xl bg-white p-3 shadow-sm transition hover:shadow-md">

          <Bell className="h-5 w-5 text-slate-700" />

        </button>

        {/* Avatar */}

        <div className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow-sm">

          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            className="h-11 w-11 rounded-full"
          />

          <div>

            <p className="font-semibold text-slate-800">
              Aashita
            </p>

            <p className="text-sm text-slate-500">
              AI Engineer
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}