import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "", className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-ink-300 mb-5">
          <span className="w-6 h-px bg-accent" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-display-lg font-semibold gradient-text text-balance">{title}</h2>
      {description && (
        <p className="mt-5 text-ink-300 text-lg leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}