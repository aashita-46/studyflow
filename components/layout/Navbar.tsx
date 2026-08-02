import Link from "next/link";
import Logo from "../shared/Logo";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">

      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-3xl bg-white/80 px-8 py-4 shadow-xl backdrop-blur-xl">

        <Logo />

        <nav className="hidden gap-10 text-sm font-medium text-slate-600 md:flex">
          <Link href="/">Home</Link>
          <Link href="#">Features</Link>
          <Link href="#">About</Link>
        </nav>

        <div className="flex gap-3">

          <Button variant="ghost">
            Login
          </Button>

          <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700">
            Get Started
          </Button>

        </div>

      </div>

    </header>
  );
}