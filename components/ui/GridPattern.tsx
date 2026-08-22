export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("absolute inset-0 grid-bg grid-bg-fade pointer-events-none", className)}
    />
  );
}

function cn(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(" ");
}