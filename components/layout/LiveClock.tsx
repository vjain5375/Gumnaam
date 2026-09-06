"use client";

import { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Date: e.g. "Sun, 06 Sep 2026"
      const formattedDate = now.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      setDateStr(formattedDate);

      // Time: e.g. "04:40:50 PM"
      const formattedTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <div className="flex items-center gap-3 rounded-full border border-border/80 bg-[#1f1b16] px-5 py-2 shadow-md backdrop-blur-md">
        <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-sm tracking-wider text-muted font-medium">Loading Clock...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-full border border-white/20 bg-[#1a1713]/95 px-4 py-2 sm:px-5 sm:py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-accent/60 hover:bg-[#231f1a]">
      {/* Live Pulsing Beacon */}
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)] animate-pulse" />

      {/* Live Date */}
      <span className="hidden sm:inline font-mono text-xs md:text-sm font-medium text-neutral-300">
        {dateStr}
      </span>

      <span className="hidden sm:inline text-white/30 font-mono text-sm">|</span>

      {/* Live Time */}
      <span className="font-mono text-sm sm:text-base md:text-[17px] tracking-wider text-white font-bold">
        {time}
      </span>

      {/* IST Tag */}
      <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-extrabold uppercase rounded-md bg-emerald-950/80 px-2 py-0.5 border border-emerald-500/30">
        IST
      </span>
    </div>
  );
}
