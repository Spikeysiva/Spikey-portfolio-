/**
 * Original generative compositions for the SPIKEY Experiment Lab.
 * Each artwork is a tall SVG (300 × 700) that fills its panel with `slice`.
 * Elements with the `lab-move` class animate when the panel is active.
 */

import type { ReactElement } from 'react';

export type LabKind = 'checker' | 'waves' | 'brush' | 'botanical' | 'type';

const INK = '#131313';
const WHITE = '#FAF8F8';

function Checker() {
  const cells = [];
  for (let r = 0; r < 14; r++)
    for (let c = 0; c < 6; c++)
      if ((r + c) % 2 === 0)
        cells.push(<rect key={`${r}-${c}`} x={c * 50} y={r * 50} width="50" height="50" />);
  const big = [];
  for (let r = 0; r < 6; r++)
    for (let c = 0; c < 6; c++)
      if ((r + c) % 2 === 1)
        big.push(<rect key={`b${r}-${c}`} x={c * 70 - 60} y={r * 70 + 110} width="70" height="70" />);
  return (
    <>
      <rect width="300" height="700" fill="#E5242C" />
      <g fill={INK}>{cells}</g>
      {/* "lens" — a bulging, larger checker inside a circle */}
      <defs>
        <clipPath id="lab-lens">
          <circle cx="150" cy="320" r="118" />
        </clipPath>
      </defs>
      <g clipPath="url(#lab-lens)">
        <rect x="0" y="180" width="300" height="300" fill="#FF4A4A" />
        <g fill={INK} className="lab-move lab-move--slide">
          {big}
        </g>
      </g>
      <circle cx="150" cy="320" r="118" fill="none" stroke={WHITE} strokeWidth="6" />
      <rect x="58" y="604" width="184" height="62" rx="31" fill={INK} />
      <text
        x="150"
        y="650"
        textAnchor="middle"
        fill={WHITE}
        fontFamily="Bricolage Grotesque, Arial Black, sans-serif"
        fontWeight="800"
        fontSize="40"
        letterSpacing="-1"
      >
        SPIKEY
      </text>
      <g transform="translate(196 520)">
        <g className="lab-move lab-move--spin">
          <path
            d="M0-40c4 24 14 34 40 40-26 6-36 16-40 40-4-24-14-34-40-40 26-6 36-16 40-40z"
            fill="#FFE36E"
          />
        </g>
      </g>
    </>
  );
}

function Waves() {
  const colors = ['#FF9F45', '#E2541B', '#FFC07A', '#FF814A', '#C73E12', '#FFB15E', '#F26A22', '#FFD9A8'];
  return (
    <>
      <rect width="300" height="700" fill="#FF6A1A" />
      <g className="lab-move lab-move--drift">
        {colors.map((c, i) => {
          const y = 40 + i * 86;
          const a = 26 + (i % 3) * 10;
          return (
            <path
              key={c}
              d={`M-40 ${y} C 20 ${y - a}, 60 ${y - a}, 110 ${y} S 200 ${y + a}, 250 ${y} S 330 ${y - a}, 360 ${y} V 760 H -40 Z`}
              fill={c}
            />
          );
        })}
      </g>
      <g fill="none" stroke={WHITE} strokeWidth="2.5" opacity="0.85">
        <path d="M-10 230 C 60 190, 110 270, 170 230 S 280 190, 320 230" />
        <path d="M-10 250 C 60 210, 110 290, 170 250 S 280 210, 320 250" />
      </g>
      <circle cx="210" cy="120" r="46" fill={WHITE} />
      <circle cx="222" cy="112" r="46" fill="#FF6A1A" />
      <text
        x="150"
        y="660"
        textAnchor="middle"
        fill={INK}
        fontFamily="Bricolage Grotesque, Arial Black, sans-serif"
        fontWeight="800"
        fontSize="54"
        letterSpacing="-2"
      >
        flow.
      </text>
    </>
  );
}

function Brush() {
  return (
    <>
      <defs>
        <filter id="lab-rough" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035 0.6" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="16" />
        </filter>
      </defs>
      <rect width="300" height="700" fill="#5B1FB8" />
      <g filter="url(#lab-rough)" fill="none" strokeLinecap="round">
        <path d="M-20 120 C 80 60, 200 180, 330 100" stroke="#C31FA6" strokeWidth="58" />
        <path d="M-30 300 C 90 360, 200 240, 340 320" stroke="#B98CFF" strokeWidth="44" />
        <path d="M40 470 C 120 420, 200 520, 280 460" stroke={WHITE} strokeWidth="26" />
        <path d="M-20 600 C 100 560, 180 660, 330 590" stroke="#2A0B5C" strokeWidth="70" />
        <path d="M150 20 C 170 220, 120 420, 170 690" stroke="#FF007F" strokeWidth="16" />
      </g>
      <g className="lab-move lab-move--float">
        <circle cx="70" cy="210" r="22" fill="#FFE36E" />
      </g>
      <text
        x="150"
        y="410"
        textAnchor="middle"
        fill={WHITE}
        fontFamily="Caveat, Segoe Print, cursive"
        fontWeight="700"
        fontSize="64"
        transform="rotate(-8 150 410)"
      >
        messy
      </text>
    </>
  );
}

function Leaf({ x, y, r, s, color }: { x: number; y: number; r: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M0 0 C 34 -40 34 -110 0 -150 C -34 -110 -34 -40 0 0 Z" fill={color} />
      <path
        d="M0 -6 V -140 M0 -40 L 16 -60 M0 -70 L -16 -92 M0 -96 L 14 -114"
        stroke="#0B5F68"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  );
}

function Flower({
  x,
  y,
  s,
  petal,
  center,
}: {
  x: number;
  y: number;
  s: number;
  petal: string;
  center: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="lab-move lab-move--spin">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="0" cy="-22" rx="13" ry="22" fill={petal} transform={`rotate(${a})`} />
        ))}
        <circle r="12" fill={center} />
      </g>
    </g>
  );
}

function Botanical() {
  return (
    <>
      <rect width="300" height="700" fill="#14C6D6" />
      <path
        d="M150 720 C 120 560, 190 420, 140 260 S 170 60, 150 -20"
        stroke="#0B5F68"
        strokeWidth="6"
        fill="none"
      />
      <Leaf x={146} y={600} r={-48} s={1} color="#0E8C99" />
      <Leaf x={150} y={560} r={42} s={0.9} color={WHITE} />
      <Leaf x={150} y={430} r={-60} s={0.8} color="#0B6E78" />
      <Leaf x={146} y={380} r={52} s={1.05} color="#7FF0F5" />
      <Leaf x={144} y={250} r={-40} s={0.75} color={WHITE} />
      <Leaf x={150} y={200} r={36} s={0.7} color="#0E8C99" />
      <Flower x={70} y={120} s={1.2} petal={WHITE} center="#FF007F" />
      <Flower x={236} y={300} s={0.9} petal="#FFE36E" center={INK} />
      <Flower x={64} y={470} s={0.8} petal="#FF007F" center="#FFE36E" />
      <Flower x={240} y={640} s={1.1} petal={WHITE} center="#5865F2" />
      <g fill="#0B5F68">
        <circle cx="250" cy="90" r="5" />
        <circle cx="40" cy="300" r="4" />
        <circle cx="260" cy="470" r="6" />
      </g>
    </>
  );
}

function TypeLab() {
  const letters = ['S', 'P', 'I', 'K', 'E', 'Y'];
  return (
    <>
      <rect width="300" height="700" fill="#22C55E" />
      <g fontFamily="Bricolage Grotesque, Arial Black, sans-serif" fontWeight="800">
        {letters.map((l, i) => {
          const outlined = i % 2 === 1;
          return (
            <g
              key={l}
              transform={`translate(${i % 2 ? 180 : 115} ${190 + i * 96}) rotate(${(i % 3) * 7 - 7})`}
            >
              <text
                className="lab-move lab-move--nudge"
                textAnchor="middle"
                fontSize={i === 2 ? 132 : 116}
                fill={outlined ? 'none' : INK}
                stroke={outlined ? INK : 'none'}
                strokeWidth={outlined ? 4 : 0}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l}
              </text>
            </g>
          );
        })}
      </g>
    </>
  );
}

const renderers: Record<LabKind, () => ReactElement> = {
  checker: Checker,
  waves: Waves,
  brush: Brush,
  botanical: Botanical,
  type: TypeLab,
};

export function LabArt({ kind, className }: { kind: LabKind; className?: string }) {
  const Art = renderers[kind];
  return (
    <svg
      className={className}
      viewBox="0 0 300 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <Art />
    </svg>
  );
}
