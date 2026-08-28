"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import type { Department } from "@/lib/types";

const swatches = ["#4f9490", "#8a6a4a", "#6f6047", "#5c7a6e"];

export default function DepartmentExplorer({
  departments,
}: {
  departments: Department[];
}) {
  return (
    <section className="border-t border-border bg-background-alt py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Explore by Work"
          title="Every department has a story"
        />

        <div className="mt-16 grid grid-cols-1 border-t border-l border-border sm:grid-cols-2">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="border-r border-b border-border"
            >
              <Link
                href={`/departments/${dept.id}`}
                className="group flex h-full flex-col justify-between gap-10 p-10 transition-colors hover:bg-background md:p-12"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: swatches[i % swatches.length] }}
                  />
                  <p className="text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-foreground">
                    {dept.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {dept.tagline}
                  </p>
                </div>
                <span className="text-sm text-muted transition-colors group-hover:text-accent">
                  Explore &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
