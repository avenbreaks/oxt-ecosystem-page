"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
  delay?: number;
  duration?: number;
}

export function TextHighlight({
  children,
  className,
  highlightClassName,
  delay = 0,
  duration = 1,
}: TextHighlightProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          delay,
          duration,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-yellow-200/60 via-yellow-300/60 to-yellow-200/60 dark:from-yellow-400/30 dark:via-yellow-500/30 dark:to-yellow-400/30 -z-10",
          highlightClassName
        )}
      />
      {children}
    </span>
  );
}

export function AnimatedTextHighlight({
  children,
  className,
  highlightClassName,
  delay = 0,
  duration = 0.8,
}: TextHighlightProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          delay,
          duration,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "left" }}
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 dark:from-primary/30 dark:via-accent/40 dark:to-primary/30 -z-10 rounded-md",
          highlightClassName
        )}
      />
      {children}
    </span>
  );
}

export function UnderlineHighlight({
  children,
  className,
  highlightClassName,
  delay = 0,
  duration = 0.6,
}: TextHighlightProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay,
          duration,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "left" }}
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary",
          highlightClassName
        )}
      />
    </span>
  );
}
