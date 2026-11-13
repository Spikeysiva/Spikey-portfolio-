/**
 * Clean inline SVG versions of the software marks.
 * Adobe apps use the official tile style (rounded square + two-letter
 * monogram in brand colours). CorelDRAW and DaVinci Resolve use their
 * recognisable glyphs (paths adapted from Simple Icons, CC0).
 * All trademarks belong to their respective owners.
 */

export type SoftwareId =
  'photoshop' | 'lightroom' | 'illustrator' | 'premiere' | 'aftereffects' | 'coreldraw' | 'davinci';

interface AdobeTileProps {
  letters: string;
  bg: string;
  fg: string;
}

function AdobeTile({ letters, bg, fg }: AdobeTileProps) {
  return (
    <svg viewBox="0 0 240 234" role="img" aria-hidden="true" focusable="false">
      <rect width="240" height="234" rx="42.5" fill={bg} />
      <rect
        x="5"
        y="5"
        width="230"
        height="224"
        rx="38"
        fill="none"
        stroke={fg}
        strokeOpacity="0.18"
        strokeWidth="2"
      />
      <text
        x="120"
        y="160"
        textAnchor="middle"
        fill={fg}
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="118"
        letterSpacing="-4"
      >
        {letters}
      </text>
    </svg>
  );
}

function CorelDraw() {
  return (
    <svg viewBox="0 0 240 234" role="img" aria-hidden="true" focusable="false">
      <rect width="240" height="234" rx="42.5" fill="#F3FBF1" />
      <g transform="translate(48 42) scale(6)">
        <path
          fill="#3AAA35"
          d="M10.651 0C10.265.019 9.4.272 8.584.657c-.816.39-3.696 2.161-3.752 6.536.072 4.145 3.847 11.191 6.397 13.455 0 0-4.141-6.952-4.439-13.013C6.488 1.575 10.651 0 10.651 0Zm2.679 0s4.159 1.575 3.861 7.635c-.299 6.061-4.439 13.013-4.439 13.013 2.547-2.264 6.324-9.31 6.396-13.455-.057-4.375-2.936-6.146-3.752-6.536C14.58.272 13.715.019 13.33 0Zm-1.38.019a1.088 1.088 0 0 0-.555.144C9.864.99 8.909 3.982 9.177 8.66c.185 3.242 1.009 7.291 2.422 11.988h.7c1.413-4.697 2.24-8.742 2.425-11.984.268-4.677-.688-7.674-2.219-8.501a1.088 1.088 0 0 0-.555-.144ZM7.017 1.066S2.543 2.909 3.431 8.225c.884 5.32 5.588 10.995 6.986 12.2.503.457-5.777-6.548-6.386-12.699-.291-2.323.39-4.9 2.986-6.66Zm9.966 0c2.595 1.76 3.276 4.337 2.985 6.66-.608 6.151-6.888 13.156-6.386 12.699 1.398-1.205 6.103-6.88 6.987-12.2.888-5.316-3.586-7.159-3.586-7.159Zm-6.815 20.78L10.647 24h2.599l.488-2.154h-3.566Z"
        />
      </g>
    </svg>
  );
}

function DaVinci() {
  return (
    <svg viewBox="0 0 240 234" role="img" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="dvr-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B3B40" />
          <stop offset="1" stopColor="#141416" />
        </linearGradient>
      </defs>
      <rect width="240" height="234" rx="42.5" fill="url(#dvr-bg)" />
      <g transform="translate(30 27) scale(7.5)">
        {/* top petal */}
        <path
          fill="#3FB5F0"
          d="M11.961 4.353c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864z"
        />
        {/* right petal */}
        <path
          fill="#F4542B"
          d="M16.133 12.275a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001z"
        />
        {/* left petal */}
        <path
          fill="#8BC53F"
          d="M7.701 12.313a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z"
        />
      </g>
    </svg>
  );
}

export function SoftwareLogo({ id }: { id: SoftwareId }) {
  switch (id) {
    case 'photoshop':
      return <AdobeTile letters="Ps" bg="#001E36" fg="#31A8FF" />;
    case 'lightroom':
      return <AdobeTile letters="Lr" bg="#001E36" fg="#31A8FF" />;
    case 'illustrator':
      return <AdobeTile letters="Ai" bg="#330000" fg="#FF9A00" />;
    case 'premiere':
      return <AdobeTile letters="Pr" bg="#00005B" fg="#9999FF" />;
    case 'aftereffects':
      return <AdobeTile letters="Ae" bg="#00005B" fg="#9999FF" />;
    case 'coreldraw':
      return <CorelDraw />;
    case 'davinci':
      return <DaVinci />;
  }
}
