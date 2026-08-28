import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { people, getPerson, getDepartment } from "@/lib/data";
import InteractiveProfile from "@/components/people/InteractiveProfile";

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

        <InteractiveProfile person={person} nextPersonId={next.id} />
      </Container>
    </div>
  );
}
