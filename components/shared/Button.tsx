import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "text";
  className?: string;
}) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`group inline-flex items-baseline gap-2 text-lg text-foreground ${className}`}
      >
        <span className="border-b border-foreground/40 pb-0.5 transition-colors group-hover:border-accent">
          {children}
        </span>
        <span className="text-accent">&rarr;</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group inline-flex items-baseline gap-2 text-base text-muted transition-colors hover:text-foreground ${className}`}
    >
      <span className="border-b border-muted/40 pb-0.5 transition-colors group-hover:border-foreground">
        {children}
      </span>
    </Link>
  );
}
