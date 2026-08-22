import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium",
        "bg-white/5 border border-white/10 text-ink-200",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
      {children}
    </span>
  );
}