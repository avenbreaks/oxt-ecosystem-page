"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
  action?: "highlight" | "underline";
  color?: string;
  duration?: number;
  delay?: number;
}

export function Highlighter({
  children,
  className,
  action = "highlight",
  color = "#FFD700",
  duration = 0.8,
  delay = 0,
}: HighlighterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const highlightStyle = {
    "--highlight-color": color,
    "--highlight-duration": `${duration}s`,
  } as React.CSSProperties;

  return (
    <span
      ref={ref}
      className={cn("relative inline-block", className)}
      style={highlightStyle}
    >
      {action === "highlight" && (
        <span
          className={cn(
            "absolute inset-0 -z-10 rounded-sm transition-all",
            isVisible ? "animate-highlight-expand" : "scale-x-0"
          )}
          style={{
            backgroundColor: color,
            opacity: 0.3,
            transformOrigin: "left",
            animationDuration: `${duration}s`,
          }}
        />
      )}
      {action === "underline" && (
        <span
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[2px] transition-all",
            isVisible ? "animate-highlight-expand" : "scale-x-0"
          )}
          style={{
            backgroundColor: color,
            transformOrigin: "left",
            animationDuration: `${duration}s`,
          }}
        />
      )}
      {children}
    </span>
  );
}
