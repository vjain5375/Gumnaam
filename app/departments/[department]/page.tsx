import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import PersonCard from "@/components/people/PersonCard";
import { departments, getDepartment, getPeopleByDepartment } from "@/lib/data";

export function generateStaticParams() {
  return departments.map((d) => ({ department: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ department: string }>;
}): Promise<Metadata> {
  const { department: id } = await params;
  const department = getDepartment(id);
  if (!department) return {};
  return {
    title: `${department.name} | Gumnaam`,
    description: department.description,
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department: id } = await params;
  const department = getDepartment(id);
  if (!department) notFound();

  const staff = getPeopleByDepartment(department.id);

  return (
    <div className="bg-background pt-40 pb-28 md:pt-48 md:pb-36">
      <Container>
        <Link
          href="/departments"
          className="text-base text-muted transition-colors hover:text-foreground"
        >
          &larr; All departments
        </Link>

        <p className="mt-10 text-base text-accent">{department.tagline}</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground md:text-6xl">
          {department.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {department.description}
        </p>

        <div className="mt-16">
          {staff.length > 0 ? (
            staff.map((person) => <PersonCard key={person.id} person={person} />)
          ) : (
            <p className="text-base text-muted">
              No profiles have been published for this department yet.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
