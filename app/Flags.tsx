// Flat, static flag icons for the nav. Purely decorative for now — not
// wired to language switching.

export function ThaiFlag() {
  return (
    <svg viewBox="0 0 9 6" preserveAspectRatio="none" className="block h-full w-full">
      <rect width="9" height="6" fill="#A51931" />
      <rect y="1" width="9" height="4" fill="#F4F5F8" />
      <rect y="2" width="9" height="2" fill="#2D2A4A" />
    </svg>
  );
}

export function JapanFlag() {
  return (
    <svg viewBox="0 0 9 6" preserveAspectRatio="none" className="block h-full w-full">
      <rect width="9" height="6" fill="#FFFFFF" />
      <circle cx="4.5" cy="3" r="1.8" fill="#BC002D" />
    </svg>
  );
}

export function UKFlag() {
  return (
    <svg viewBox="0 0 9 6" preserveAspectRatio="none" className="block h-full w-full">
      <rect width="9" height="6" fill="#00247D" />
      <path d="M0,0 L9,6 M9,0 L0,6" stroke="#FFFFFF" strokeWidth="1.3" />
      <path d="M0,0 L9,6 M9,0 L0,6" stroke="#CF142B" strokeWidth="0.45" />
      <path d="M4.5,0 V6 M0,3 H9" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M4.5,0 V6 M0,3 H9" stroke="#CF142B" strokeWidth="1.1" />
    </svg>
  );
}
