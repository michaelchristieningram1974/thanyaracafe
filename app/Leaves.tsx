// Simple flat, line-art botanical sprig used as a corner decoration.
// No fill, no shadow — matches the printed menu's delicate corner leaves.

export function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 112 C 30 90, 42 68, 36 38" />
        <path d="M36 38 C 46 44, 56 41, 62 29" />
        <path d="M34 54 C 47 57, 58 51, 64 39" />
        <path d="M29 74 C 44 76, 55 68, 58 55" />
        <path d="M20 95 C 35 94, 45 86, 49 73" />
      </g>
    </svg>
  );
}
