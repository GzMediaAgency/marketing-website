export function Glow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] opacity-60" />
    </div>
  );
}