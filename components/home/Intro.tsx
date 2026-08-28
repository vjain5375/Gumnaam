"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";

export default function Intro() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="timecode text-[11px] text-muted/50 uppercase"
          >
            Field Note, 01
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl border-l border-border pl-6 md:pl-10"
          >
            <p className="font-serif text-3xl leading-snug text-foreground md:text-[2.4rem]">
              You pass them every day. How much do you actually know about
              them?
            </p>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
              Gumnaam introduces the people who keep this campus running,
              through their own photographs, voices, and stories. Not a
              directory. Not statistics. A record of who they are.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
