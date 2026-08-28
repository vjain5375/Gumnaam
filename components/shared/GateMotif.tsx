export default function GateMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* horizon */}
      <line x1="0" y1="430" x2="420" y2="430" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />

      {/* perspective path */}
      <path d="M60 430 L180 250 M360 430 L240 250" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" />

      {/* left pillar */}
      <rect x="118" y="130" width="26" height="300" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" />
      {/* right pillar */}
      <rect x="276" y="130" width="26" height="300" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" />

      {/* archway beam */}
      <path
        d="M110 130 Q210 40 310 130"
        stroke="currentColor"
        strokeOpacity="0.65"
        strokeWidth="1.6"
      />
      <path
        d="M96 138 Q210 24 324 138"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />

      {/* lamp */}
      <circle cx="210" cy="88" r="7" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" />
      <line x1="210" y1="95" x2="210" y2="112" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />

      {/* gate bars */}
      {[152, 172, 192].map((x) => (
        <line key={x} x1={x} y1="220" x2={x} y2="430" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
      ))}
      {[228, 248, 268].map((x) => (
        <line key={x} x1={x} y1="220" x2={x} y2="430" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
      ))}

      {/* ground line */}
      <line x1="60" y1="430" x2="360" y2="430" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4" />
    </svg>
  );
}
