"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function ClosingStatement() {
  return (
    <section className="relative border-t border-border bg-[#0f0e0d] py-28 md:py-36">
      <div className="grain absolute inset-0" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:gap-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="timecode text-[11px] text-muted/50 uppercase"
          >
            Closing Frame
          </motion.p>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl border-l border-border pl-6 font-serif text-3xl leading-snug text-foreground md:pl-10 md:text-[2.4rem]"
            >
              The campus is more than its buildings, classrooms and events.{" "}
              <span className="text-accent">
                It is also the people who keep it alive.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 pl-6 md:pl-10"
            >
              <Button href="/people">
                You may know the campus. Now know the people.
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
