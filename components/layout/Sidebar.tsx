"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  Settings,
  UserRound,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Onboarding",
    href: "/onboarding",
    icon: UserRound,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 flex-col border-r border-slate-200 bg-white p-6 lg:flex">
      {/* Logo */}

      <div className="mb-12 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            StudyFlow
          </h2>

          <p className="text-sm text-slate-500">
            AI Study Planner
          </p>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all ${
                active
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Card */}

      <div className="mt-auto rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white shadow-xl">
        <h3 className="text-lg font-semibold">
          Today's Focus
        </h3>

        <p className="mt-2 text-sm opacity-90">
          Complete all three study sessions to keep your streak alive 🔥
        </p>

        <div className="mt-5 h-2 rounded-full bg-white/30">
          <div className="h-full w-2/3 rounded-full bg-white"></div>
        </div>

        <p className="mt-3 text-xs opacity-80">
          67% Complete
        </p>
      </div>
    </aside>
  );
}