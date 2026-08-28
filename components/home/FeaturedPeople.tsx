"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import PersonCard from "@/components/people/PersonCard";
import type { Person } from "@/lib/types";

export default function FeaturedPeople({ people }: { people: Person[] }) {
  return (
    <section className="bg-background py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Featured Stories"
          title="A few of the people behind campus life"
          description="Each profile is being built with their own words, photographs and voice, added as interviews are completed."
        />

        <div className="mt-14">
          {people.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            >
              <PersonCard person={person} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
