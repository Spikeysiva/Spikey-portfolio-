/**
 * Original SPIKEY mascot: a friendly, spiky-haired designer waving hello.
 * White hand-drawn outlines on a transparent background. The sketchy feel
 * comes from a light SVG displacement filter plus doubled "pencil" strokes.
 */
export function HeroDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 220"
      role="img"
      aria-label="Doodle of SPIKEY, a spiky-haired designer, waving hello"
      fill="none"
      stroke="#FAF8F8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <filter id="doodle-sketch" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="2.2" />
        </filter>
      </defs>

      <g filter="url(#doodle-sketch)">
        {/* spiky hair */}
        <path
          d="M78 82 L74 52 L92 66 L96 34 L112 58 L122 26 L134 56 L150 30 L154 60 L172 44 L168 74 L186 70 L176 92"
          strokeWidth="4"
        />
        <path d="M80 80 L77 56 L93 69" strokeWidth="1.6" opacity="0.6" />

        {/* head */}
        <path d="M80 84 C 70 118, 86 158, 128 160 C 170 162, 186 124, 176 90" strokeWidth="4" />
        <path d="M82 92 C 76 122, 92 154, 128 156" strokeWidth="1.6" opacity="0.55" />

        {/* ear + pencil tucked behind it */}
        <path d="M177 102 C 190 100, 192 122, 178 124" strokeWidth="3.5" />
        <path d="M184 86 L 214 62" strokeWidth="7" />
        <path d="M214 62 L 222 56" strokeWidth="3" />
        <path d="M181 89 L 186 85" strokeWidth="3" />

        {/* eyes (happy arcs) + brows */}
        <path d="M100 108 C 105 101, 113 101, 117 108" strokeWidth="4" />
        <path d="M138 108 C 143 101, 151 101, 155 108" strokeWidth="4" />
        <path d="M100 94 L 116 92" strokeWidth="3" />
        <path d="M139 92 L 155 94" strokeWidth="3" />

        {/* cheeks */}
        <path d="M94 124 l6 -4 M98 128 l6 -4" strokeWidth="2" opacity="0.8" />
        <path d="M156 124 l6 -4 M160 128 l6 -4" strokeWidth="2" opacity="0.8" />

        {/* big grin */}
        <path d="M108 126 C 116 144, 140 144, 148 126 C 136 130, 120 130, 108 126 Z" strokeWidth="3.5" />
        <path d="M118 135 C 124 139, 132 139, 138 135" strokeWidth="2" />

        {/* shoulders / t-shirt */}
        <path
          d="M70 218 C 72 190, 92 172, 112 168 L 128 178 L 144 168 C 164 172, 184 190, 186 218"
          strokeWidth="4"
        />
        <path d="M112 168 L 128 190 L 144 168" strokeWidth="2.5" />
        {/* tiny star on the shirt */}
        <path d="M152 196 l3 7 7 1 -5 5 1 7 -6 -4 -6 4 1 -7 -5 -5 7 -1 z" strokeWidth="2.2" />

        {/* left arm resting */}
        <path d="M76 192 C 64 200, 58 210, 56 218" strokeWidth="4" />

        {/* waving arm + hand */}
        <g className="doodle-wave">
          <path d="M182 186 C 200 176, 212 158, 218 136" strokeWidth="4" />
          <path
            d="M210 138 C 206 124, 214 110, 222 112 C 224 102, 236 102, 236 112 C 240 104, 252 108, 248 120 C 254 120, 256 132, 246 138 C 240 146, 222 148, 214 140 Z"
            strokeWidth="3.5"
          />
          <path d="M226 114 L 230 128 M238 114 L 238 128" strokeWidth="2" opacity="0.8" />
        </g>

        {/* motion lines */}
        <g className="doodle-lines" strokeWidth="3">
          <path d="M240 86 C 246 80, 252 80, 256 84" />
          <path d="M252 100 C 256 98, 258 100, 258 104" />
          <path d="M226 80 C 228 74, 232 72, 236 72" />
        </g>

        {/* playful marks */}
        <path d="M34 60 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z" strokeWidth="2.5" />
        <path d="M30 128 C 38 122, 46 134, 54 128" strokeWidth="2.5" />
        <circle cx="52" cy="96" r="3" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
