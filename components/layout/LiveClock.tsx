"use client";

import { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: HH:MM:SS AM/PM
      const formatted = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background-alt/60 px-3 py-1 text-xs text-muted backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-[11px]">--:--:-- --</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background-alt/80 px-3 py-1 text-xs text-muted/90 shadow-sm backdrop-blur-md transition-colors hover:border-accent/40">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] animate-pulse" />
      <span className="font-mono text-[11px] tracking-wide text-foreground/90 font-medium">
        {time}
      </span>
      <span className="hidden sm:inline text-[9px] font-mono tracking-widest text-muted/60 uppercase">
        IST
      </span>
    </div>
  );
}
