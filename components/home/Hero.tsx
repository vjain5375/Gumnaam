"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";

export default function Hero() {
  const [timecode, setTimecode] = useState("00:00:04:12");

  useEffect(() => {
    let frame = 12;
    let sec = 4;
    const interval = setInterval(() => {
      frame += 1;
      if (frame >= 30) {
        frame = 0;
        sec += 1;
      }
      const s = String(sec).padStart(2, "0");
      const f = String(frame).padStart(2, "0");
      setTimecode(`00:00:${s}:${f}`);
    }, 66); // ~15-20fps vintage camera ticker

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[#0f0e0d]" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-center px-6 pt-24 pb-24 md:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 text-[11px] text-muted/80"
        >
          <span className="rec-dot h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]" />
          <span className="timecode font-mono font-bold tracking-wider text-red-400/90">REC</span>
          <span className="timecode font-mono text-foreground/90">{timecode}</span>
          <span className="text-muted/50">| campus archive, file 001</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-serif text-[3.6rem] leading-[0.95] text-foreground sm:text-7xl md:text-[7.5rem]"
        >
          Gumnaam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.22 }}
          className="mt-4 font-serif text-2xl text-accent italic md:text-3xl"
        >
          itne paas, phir bhi anjaan
        </motion.p>

        {/* Drone Shot Video - Full Screen Cinematic Embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.28 }}
          className="relative mt-8 w-full overflow-hidden rounded-2xl border border-border/70 bg-black/80 shadow-2xl backdrop-blur-md md:rounded-3xl"
        >
          <div className="relative w-full h-[55vh] sm:h-[68vh] md:h-[80vh] max-h-[850px] overflow-hidden">
            <video
              src="https://res.cloudinary.com/dzt9fr0cw/video/upload/v1788692055/drone_shot_6_dd1fc2.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2.5 rounded-full bg-black/75 px-3.5 py-1.5 text-[11px] tracking-wider text-white/90 backdrop-blur-md border border-white/10">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase">Campus Aerial Archive // Drone Shot</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-muted"
        >
          Every day, they help keep the campus moving. Most days, we never
          ask their names.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.46 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/people">Meet the people</Button>
          <Button href="/about" variant="text">
            About the project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
