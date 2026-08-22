import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; onClick?: never };
type Props = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-ink-900 hover:bg-ink-100 active:bg-ink-200",
  secondary:
    "bg-ink-800 text-ink-50 hover:bg-ink-700 border border-white/10",
  ghost:
    "bg-transparent text-ink-100 hover:bg-white/5",
  outline:
    "bg-transparent text-ink-50 border border-white/15 hover:border-white/30 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button(props: Props) {
  const { variant = "primary", size = "md", withArrow = false, className, children, ...rest } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
        {withArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      </Link>
    );
  }

  const { ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={cn(classes, "group")} {...buttonProps}>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}