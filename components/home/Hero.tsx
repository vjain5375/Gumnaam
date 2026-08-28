"use client";

import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import GateMotif from "@/components/shared/GateMotif";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[#0f0e0d]" />
      <div className="grain absolute inset-0" />

      {/* gate motif, anchored right, fades into the frame */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute top-1/2 right-[-4%] hidden h-[85vh] w-[42vw] -translate-y-1/2 text-accent md:block"
      >
        <GateMotif className="h-full w-full" />
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45vw] bg-gradient-to-l from-[#0f0e0d] via-[#0f0e0d]/40 to-transparent md:block" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-center px-6 pt-24 pb-24 md:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 text-[11px] text-muted/80"
        >
          <span className="rec-dot h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="timecode">REC</span>
          <span className="timecode">00:00:04:12</span>
          <span className="text-muted/50">campus archive, file 001</span>
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

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.34 }}
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
