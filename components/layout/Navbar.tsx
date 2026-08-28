import Link from "next/link";

const links = [
  { href: "/people", label: "People" },
  { href: "/departments", label: "Departments" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 right-0 left-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0908] to-transparent" />
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-16 md:py-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.2em] text-foreground uppercase"
        >
          Gumnaam
        </Link>
        <nav className="hidden gap-9 text-base text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
