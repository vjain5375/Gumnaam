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
      <div className="flex items-center gap-2.5 rounded-full border border-border/80 bg-[#1f1b16] px-4 py-1.5 shadow-md backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-sm tracking-wider text-muted font-medium">--:--:--</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-[#1e1b17]/90 px-4 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:border-accent/60 hover:bg-[#26221d]">
      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />
      <span className="font-mono text-[13px] tracking-wider text-white font-semibold">
        {time}
      </span>
      <span className="text-[10px] font-mono tracking-widest text-emerald-400/90 font-bold uppercase rounded bg-emerald-950/60 px-1.5 py-0.5 border border-emerald-500/20">
        IST
      </span>
    </div>
  );
}
