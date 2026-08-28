import type { Metadata } from "next";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Stories | Gumnaam",
  description: "The documentary film, short stories and ambient recordings from the Gumnaam archive.",
};

const sections = [
  {
    label: "01",
    title: "Documentary Film",
    body: "The main Gumnaam documentary is currently in production, built from interviews and daily-routine footage recorded with consent from each participant.",
  },
  {
    label: "02",
    title: "Audio & Ambient Moments",
    body: "Field recordings of the campus, the gate, the canteen, the corridors, captured alongside the interviews, will accompany the finished profiles.",
  },
];

export default function StoriesPage() {
  return (
    <div className="bg-background pt-40 pb-28 md:pt-48 md:pb-36">
      <Container>
        <p className="mb-4 text-base text-accent">Stories</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
          The archive, as it grows
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Gumnaam is being built one interview at a time. Here is what is in
          progress right now.
        </p>

        <div className="mt-16 divide-y divide-border border-t border-b border-border">
          {sections.map((section) => (
            <div
              key={section.label}
              className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[auto_1fr] md:gap-14"
            >
              <p className="font-serif text-2xl text-accent/70">
                {section.label}
              </p>
              <div>
                <h2 className="font-serif text-2xl text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
