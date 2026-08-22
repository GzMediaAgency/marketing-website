import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white text-ink-900 font-semibold text-sm tracking-tight">
        <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none" aria-hidden>
          <path d="M6 16a10 10 0 1 0 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M16 16h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="22" cy="22" r="2" fill="currentColor"/>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight">GZ Media</span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-ink-400">Agency</span>
      </span>
    </Link>
  );
}