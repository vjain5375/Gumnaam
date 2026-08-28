import type { Metadata } from "next";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "About | Gumnaam",
  description: "Why Gumnaam exists, how it is made, and how consent is handled.",
};

export default function AboutPage() {
  return (
    <div className="bg-background pt-40 pb-28 md:pt-48 md:pb-36">
      <Container className="max-w-3xl">
        <p className="mb-4 text-base text-accent">About</p>
        <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Why Gumnaam exists
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Gumnaam is a digital documentary and storytelling project that
          gives visibility to the campus support staff who are present in
          students&apos; daily lives but often remain personally unknown to
          them. It is built as a human-centered archive, not an employee
          directory, people first, profession second, story above
          statistics.
        </p>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-foreground">
            Project Team
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-lg text-foreground">Vansh Jain</p>
              <p className="text-base text-muted">24CD3049</p>
            </div>
            <div>
              <p className="text-lg text-foreground">Ayush Raj</p>
              <p className="text-base text-muted">24CD3010</p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-foreground">Methodology</h2>
          <ol className="mt-6 space-y-3 text-base leading-relaxed text-muted">
            <li>1. Identify a staff member and explain the project to them.</li>
            <li>2. Take their consent before recording anything.</li>
            <li>3. Record an interview and their daily routine.</li>
            <li>4. Capture supporting photographs and ambient audio.</li>
            <li>5. Transcribe the interview and draft a short story.</li>
            <li>6. Review the finished profile with the subject.</li>
            <li>7. Publish the profile only once they are comfortable with it.</li>
          </ol>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            AI tools assist with transcription, translation and organizing
            footage. They are never used to invent quotes, memories or
            footage. The person owns their story; AI only helps organize it.
          </p>
        </section>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-foreground">
            Consent &amp; Ethics
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Consent is treated as a core feature of this project, not
            paperwork at the end. Every participant is told where their
            story may appear, is free to decline any question, and is shown
            the final representation of their profile before it is
            published. Poverty, age, occupation or personal hardship are
            never used as emotional decoration. Requests to remove sensitive
            personal information are always respected.
          </p>
        </section>
      </Container>
    </div>
  );
}
