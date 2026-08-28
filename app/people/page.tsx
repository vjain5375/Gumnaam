import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PersonCard from "@/components/people/PersonCard";
import { people } from "@/lib/data";

export const metadata: Metadata = {
  title: "People | Gumnaam",
  description: "Meet the campus support staff featured in the Gumnaam archive.",
};

export default function PeoplePage() {
  return (
    <div className="bg-background pt-40 pb-28 md:pt-48 md:pb-36">
      <Container>
        <p className="mb-4 text-base text-accent">People</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
          The people who keep this campus running
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Every profile here is built from a real conversation. As more
          interviews are completed, more stories will be added.
        </p>

        <div className="mt-16">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </Container>
    </div>
  );
}
