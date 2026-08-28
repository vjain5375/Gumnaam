import Link from "next/link";
import type { Person } from "@/lib/types";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Link
      href={`/people/${person.id}`}
      className="group grid grid-cols-1 gap-3 border-t border-border py-8 transition-colors last:border-b hover:bg-background-alt md:grid-cols-[1fr_1.3fr] md:items-baseline md:gap-10 md:px-4"
    >
      <div>
        <p className="font-serif text-2xl text-foreground">{person.name}</p>
        <p className="mt-1 text-base text-muted">{person.role}</p>
        {person.yearsAtCampus && (
          <p className="mt-0.5 text-sm text-muted/60">
            {person.yearsAtCampus} years at campus
          </p>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-6">
        {person.quote ? (
          <p className="max-w-md text-base leading-relaxed text-muted italic">
            &ldquo;{person.quote}&rdquo;
          </p>
        ) : (
          <span />
        )}
        <span className="shrink-0 text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100">
          &rarr;
        </span>
      </div>
    </Link>
  );
}
