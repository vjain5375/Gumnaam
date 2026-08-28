import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { people, getPerson, getDepartment } from "@/lib/data";

export function generateStaticParams() {
  return people.map((p) => ({ person: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ person: string }>;
}): Promise<Metadata> {
  const { person: id } = await params;
  const person = getPerson(id);
  if (!person) return {};
  return {
    title: `${person.name} | Gumnaam`,
    description: person.shortBio,
  };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ person: string }>;
}) {
  const { person: id } = await params;
  const person = getPerson(id);
  if (!person) notFound();

  const department = getDepartment(person.department);
  const index = people.findIndex((p) => p.id === person.id);
  const next = people[(index + 1) % people.length];

  return (
    <div className="bg-background pt-40 pb-28 md:pt-48 md:pb-36">
      <Container className="max-w-3xl">
        <Link
          href="/people"
          className="text-base text-muted transition-colors hover:text-foreground"
        >
          &larr; All people
        </Link>

        <p className="mt-10 text-base text-accent">
          {department?.name ?? person.department}
        </p>
        {person.image && (
          <img 
            src={person.image} 
            alt={person.name} 
            className="mt-6 h-64 w-64 rounded-full object-cover shadow-lg border border-border" 
          />
        )}
        <h1 className="mt-6 font-serif text-5xl text-foreground md:text-6xl">
          {person.name}
        </h1>
        <p className="mt-2 text-lg text-muted">{person.role}</p>
        {person.yearsAtCampus && (
          <p className="mt-0.5 text-base text-muted/60">
            {person.yearsAtCampus} years at campus
          </p>
        )}
        {(person.age || person.address) && (
          <p className="mt-0.5 text-base text-muted/60">
            {person.age ? `${person.age} years old` : ""}{person.age && person.address ? " • " : ""}{person.address || ""}
          </p>
        )}

        {person.quote && (
          <p className="mt-10 border-l border-border pl-6 font-serif text-2xl leading-snug text-foreground italic md:pl-10 md:text-3xl">
            &ldquo;{person.quote}&rdquo;
          </p>
        )}

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
          {person.shortBio}
        </p>

        <div className="mt-16 rounded-2xl border border-border bg-background-alt p-8 text-base text-muted">
          <p className="text-foreground">This profile is still in progress.</p>
          <p className="mt-2 leading-relaxed">
            The full documentary video, interview transcript and photo
            gallery for {person.name.split(" ")[0]} will appear here once
            filming and consent review are complete.
          </p>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-10">
          <Button href="/people" variant="text">
            All people
          </Button>
          <Button href={`/people/${next.id}`}>Next person</Button>
        </div>
      </Container>
    </div>
  );
}
