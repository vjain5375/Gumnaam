function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PortraitPlaceholder({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[#1a1815] ${className}`}
      aria-label={`Portrait placeholder for ${name}`}
    >
      <div className="grain absolute inset-0" />
      {/* duotone backdrop, no glow orb */}
      <div className="absolute inset-0 bg-[linear-gradient(200deg,#211e1a_0%,#141210_65%)]" />

      {/* aperture mark, standing in for a photograph not yet captured */}
      <div className="relative flex flex-col items-center gap-4">
        <svg
          viewBox="0 0 48 48"
          className="h-9 w-9 text-muted/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden
        >
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" />
          <path d="M24 8v8M24 32v8M8 24h8M32 24h8" strokeLinecap="round" />
        </svg>
        <span className="font-serif text-sm tracking-[0.1em] text-muted/40">
          Photograph pending
        </span>
        <span className="text-xs tracking-[0.15em] text-muted/25 uppercase">
          {initials(name)}
        </span>
      </div>
    </div>
  );
}
