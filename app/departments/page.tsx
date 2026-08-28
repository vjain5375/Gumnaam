import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { departments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Departments | Gumnaam",
  description: "Explore campus support staff by department.",
};

const swatches = ["#4f9490", "#8a6a4a", "#6f6047", "#5c7a6e"];

export default function DepartmentsPage() {
  return (
    <div className="bg-background pt-40 pb-28 md:pt-48 md:pb-36">
      <Container>
        <p className="mb-4 text-base text-accent">Departments</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Every department has a story
        </h1>

        <div className="mt-16 grid grid-cols-1 border-t border-l border-border sm:grid-cols-2">
          {departments.map((dept, i) => (
            <Link
              key={dept.id}
              href={`/departments/${dept.id}`}
              className="group flex flex-col justify-between gap-10 border-r border-b border-border p-10 transition-colors hover:bg-background-alt md:p-12"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: swatches[i % swatches.length] }}
                />
                <p className="text-base text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-foreground">
                  {dept.name}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {dept.description}
                </p>
              </div>
              <span className="text-base text-muted transition-colors group-hover:text-accent">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
