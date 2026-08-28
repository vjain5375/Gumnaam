import Link from "next/link";

const links = [
  { href: "/people", label: "People" },
  { href: "/departments", label: "Departments" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 text-base text-muted md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-lg tracking-[0.15em] text-foreground uppercase">
            Gumnaam
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:hidden">
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
          <p>Itne Paas, Phir Bhi Anjaan. A campus documentary archive.</p>
          <p>&copy; {new Date().getFullYear()} Gumnaam Project</p>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-base text-muted/70">
          <p>Developed by Vansh Jain (24CD3049) and Ayush Raj (24CD3010)</p>
        </div>
      </div>
    </footer>
  );
}
