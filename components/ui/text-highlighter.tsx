import { cn } from "@/lib/utils";

interface TextHighlighterProps {
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
  variant?: "default" | "gradient" | "underline" | "box";
}

export function TextHighlighter({
  children,
  className,
  highlightClassName,
  variant = "default",
}: TextHighlighterProps) {
  const variants = {
    default: "before:bg-yellow-300/40 dark:before:bg-yellow-400/30",
    gradient: "before:bg-gradient-to-r before:from-primary/20 before:via-accent/30 before:to-primary/20",
    underline: "after:bg-gradient-to-r after:from-primary after:via-accent after:to-primary after:h-[3px] after:bottom-0",
    box: "before:bg-primary/10 before:rounded-md before:-inset-x-1 before:-inset-y-0.5"
  };

  const isUnderline = variant === "underline";

  return (
    <span
      className={cn(
        "relative inline-block",
        isUnderline
          ? "after:absolute after:left-0 after:right-0 after:animate-highlight-slide"
          : "before:absolute before:inset-0 before:-z-10 before:animate-highlight-slide",
        variants[variant],
        highlightClassName,
        className
      )}
    >
      {children}
    </span>
  );
}
