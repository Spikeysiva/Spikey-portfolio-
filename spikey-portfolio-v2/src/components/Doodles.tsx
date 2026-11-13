/** Small hand-drawn style decorative SVGs. All are purely decorative. */

interface DoodleProps {
  className?: string;
  color?: string;
}

export function Star({ className, color = 'currentColor' }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path
        d="M24 3c1.6 9.6 5.4 15.4 21 21-15.6 5.6-19.4 11.4-21 21-1.6-9.6-5.4-15.4-21-21 15.6-5.6 19.4-11.4 21-21z"
        fill={color}
      />
    </svg>
  );
}

export function Sparkle({ className, color = 'currentColor' }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g stroke={color} strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M24 4v12M24 32v12M4 24h12M32 24h12M10 10l7 7M31 31l7 7M38 10l-7 7M17 31l-7 7" />
      </g>
    </svg>
  );
}

export function Squiggle({ className, color = 'currentColor' }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 160 40" aria-hidden="true" focusable="false">
      <path
        d="M4 24c12-18 24-18 32 0s20 18 32 0 22-18 32 0 22 18 32 0 18-14 24-4"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Underline({ className, color = 'currentColor' }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 16c60-10 140-14 292-6" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

export function CurlyArrow({ className, color = 'currentColor' }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 120 90" aria-hidden="true" focusable="false">
      <g fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12c30-4 52 8 44 26-6 14-24 6-16-8 10-16 46-12 62 32" />
        <path d="M86 50l12 14 6-18" />
      </g>
    </svg>
  );
}

export function Blob({ className, color = 'currentColor' }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <path d="M42 34c26-24 82-30 114-6s38 78 16 112-74 54-110 38S2 122 8 86s8-28 34-52z" fill={color} />
    </svg>
  );
}

export function Smiley({ className, color = 'currentColor' }: DoodleProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="28" fill={color} />
      <circle cx="23" cy="26" r="4" fill="#080808" />
      <circle cx="41" cy="26" r="4" fill="#080808" />
      <path d="M20 38c6 9 18 9 24 0" fill="none" stroke="#080808" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
