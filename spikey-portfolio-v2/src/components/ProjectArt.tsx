import type { ReactNode } from 'react';
import type { ArtKind } from '../data/projects';

/**
 * TEMPORARY placeholder artwork, generated as lightweight SVG.
 * Replace by adding real `images` to a project in src/data/projects.ts.
 */

const C = {
  pink: '#FF007F',
  ink: '#080808',
  paper: '#FAF8F5',
  yellow: '#FFE36E',
  blue: '#5865F2',
  orange: '#FF814A',
};

interface ArtProps {
  kind: ArtKind;
  bg: string;
  /** 0 = cover, 1 & 2 = alternate compositions for the detail page. */
  variant?: number;
  className?: string;
  label?: string;
}

const pick = (bg: string, a: string, b: string) => (bg.toUpperCase() === a ? b : a);

function Identity({ bg, v }: { bg: string; v: number }) {
  const petal = pick(bg, C.paper, C.yellow);
  const center = pick(bg, C.yellow, C.ink);
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <>
      <g transform={`translate(${v === 1 ? 250 : 400} 300) rotate(${v * 12})`}>
        <g className="art-spin">
          {petals.map((r) => (
            <ellipse key={r} cx="0" cy="-92" rx="54" ry="92" fill={petal} transform={`rotate(${r})`} />
          ))}
          <circle r="58" fill={center} />
          <circle r="18" fill={bg} />
        </g>
      </g>
      {v === 1 && (
        <g fill={C.paper} fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800">
          <text x="440" y="285" fontSize="78" letterSpacing="-3">
            pop
          </text>
          <text x="440" y="365" fontSize="78" letterSpacing="-3">
            bloom
          </text>
        </g>
      )}
      {v === 2 && (
        <g>
          {[C.pink, C.yellow, C.blue, C.orange, C.ink].map((c, i) => (
            <rect
              key={c}
              x={120 + i * 116}
              y="430"
              width="96"
              height="96"
              rx="48"
              fill={c}
              stroke={C.paper}
              strokeWidth="4"
            />
          ))}
        </g>
      )}
    </>
  );
}

function Poster({ bg, v }: { bg: string; v: number }) {
  return (
    <>
      <g transform={`rotate(${v === 2 ? -8 : -4} 400 300)`}>
        <rect x="250" y="40" width="300" height="420" rx="10" fill={C.ink} />
        <circle cx="400" cy="190" r="100" fill={C.pink} />
        <rect x="290" y="250" width="220" height="70" fill={C.blue} />
        <g fill={C.paper} fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800">
          <text x="280" y="390" fontSize="64" letterSpacing="-2">
            NOISE
          </text>
          <text x="280" y="430" fontSize="22" letterSpacing="4">
            VOL. 0{v + 1}
          </text>
        </g>
      </g>
      {v !== 1 && (
        <g transform="rotate(10 640 320)">
          <rect x="560" y="140" width="190" height="270" rx="8" fill={C.orange} />
          <path d="M580 330l60-110 60 110z" fill={C.ink} />
        </g>
      )}
      {v !== 2 && (
        <g transform="rotate(-12 150 340)">
          <rect x="60" y="200" width="180" height="250" rx="8" fill={C.paper} />
          <circle cx="150" cy="290" r="54" fill={bg === C.yellow ? C.blue : C.yellow} />
          <rect x="85" y="370" width="130" height="14" rx="7" fill={C.ink} />
          <rect x="85" y="396" width="90" height="14" rx="7" fill={C.ink} />
        </g>
      )}
    </>
  );
}

function Can({ x, color, stripe, delay }: { x: number; color: string; stripe: string; delay: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <g className="art-bob" style={{ animationDelay: `${delay}s` }}>
        <rect x="-70" y="150" width="140" height="300" rx="26" fill={color} />
        <rect x="-62" y="134" width="124" height="30" rx="12" fill="#D9D6D0" />
        <path d={`M-70 260c40-30 100 30 140 0v70c-40 30-100-30-140 0z`} fill={stripe} />
        <circle cx="0" cy="210" r="22" fill={C.paper} />
        <rect x="-40" y="380" width="80" height="12" rx="6" fill={C.paper} opacity="0.8" />
      </g>
    </g>
  );
}

function Packaging({ v }: { v: number }) {
  const sets = [
    [C.pink, C.yellow],
    [C.yellow, C.orange],
    [C.orange, C.pink],
  ];
  if (v === 2) {
    return (
      <g>
        {Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 7 }, (_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={60 + c * 115}
              cy={70 + r * 115}
              r="40"
              fill={sets[(r + c) % 3][0]}
            />
          )),
        )}
        <Can x={400} color={C.paper} stripe={C.pink} delay={0} />
      </g>
    );
  }
  return (
    <>
      <ellipse cx="400" cy="470" rx="320" ry="26" fill={C.ink} opacity="0.18" />
      {(v === 1 ? [0] : [0, 1, 2]).map((i) => (
        <Can
          key={i}
          x={v === 1 ? 400 : 200 + i * 200}
          color={sets[i][0]}
          stripe={sets[i][1]}
          delay={i * 0.4}
        />
      ))}
    </>
  );
}

function Social({ bg, v }: { bg: string; v: number }) {
  const phone = (x: number, rot: number, accent: string, k: number) => (
    <g key={k} transform={`rotate(${rot} ${x} 300)`}>
      <rect x={x - 115} y="60" width="230" height="460" rx="36" fill={C.ink} />
      <rect x={x - 102} y="92" width="204" height="396" rx="22" fill={C.paper} />
      <circle cx={x - 70} cy="128" r="18" fill={accent} />
      <rect x={x - 42} y="118" width="90" height="10" rx="5" fill={C.ink} opacity="0.7" />
      <rect x={x - 88} y="166" width="176" height="176" rx="18" fill={accent} />
      <path
        d={`M${x - 30} 250l25 25 45-55`}
        stroke={C.paper}
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={`M${x - 80} 378c0-12 20-14 20 0 0-14 20-12 20 0 0 14-20 24-20 24s-20-10-20-24z`}
        fill={C.pink}
      />
      <rect x={x - 88} y="420" width="150" height="12" rx="6" fill={C.ink} opacity="0.5" />
      <rect x={x - 88} y="444" width="110" height="12" rx="6" fill={C.ink} opacity="0.3" />
    </g>
  );
  if (v === 1) return <>{phone(400, 0, C.blue, 0)}</>;
  return (
    <>
      {phone(250, -10, v === 2 ? C.yellow : C.pink, 0)}
      {phone(550, 8, pick(bg, C.blue, C.pink), 1)}
    </>
  );
}

function Creature({
  x,
  y,
  s,
  color,
  eye = C.paper,
}: {
  x: number;
  y: number;
  s: number;
  color: string;
  eye?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="art-bob">
        <path d="M-90 60c-10-90 30-150 90-150s100 60 90 150c-4 36-180 36-180 0z" fill={color} />
        <path d="M-60-80l-20-50 40 30M60-80l20-50-40 30" fill={color} />
        <circle cx="-30" cy="-20" r="22" fill={eye} />
        <circle cx="30" cy="-20" r="22" fill={eye} />
        <circle cx="-26" cy="-16" r="10" fill={C.ink} />
        <circle cx="34" cy="-16" r="10" fill={C.ink} />
        <path d="M-24 28c14 14 34 14 48 0" stroke={C.ink} strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>
    </g>
  );
}

function Illustration({ v }: { v: number }) {
  return (
    <>
      <circle cx="400" cy="320" r="230" fill={C.pink} opacity={v === 1 ? 1 : 0.9} />
      {v !== 1 && <Creature x={240} y={360} s={0.9} color={C.yellow} />}
      <Creature
        x={v === 1 ? 400 : 420}
        y={330}
        s={v === 1 ? 1.4 : 1.15}
        color={v === 2 ? C.orange : C.blue}
      />
      {v !== 1 && <Creature x={600} y={390} s={0.7} color={C.paper} eye={C.yellow} />}
      <g fill={C.paper}>
        <circle cx="120" cy="110" r="6" />
        <circle cx="690" cy="90" r="8" />
        <circle cx="720" cy="230" r="5" />
        <circle cx="90" cy="420" r="5" />
      </g>
    </>
  );
}

function Motion({ v }: { v: number }) {
  return (
    <>
      <path
        d="M60 470c80-380 160-380 240 0s160-380 240 0 140-260 200-150"
        fill="none"
        stroke={C.ink}
        strokeWidth="6"
        strokeDasharray="4 18"
        strokeLinecap="round"
      />
      <ellipse cx="180" cy="478" rx="70" ry="12" fill={C.ink} opacity="0.2" />
      <ellipse cx="420" cy="478" rx="70" ry="12" fill={C.ink} opacity="0.2" />
      <ellipse cx="180" cy="420" rx="80" ry="54" fill={C.pink} />
      <circle cx="300" cy="210" r="62" fill={C.blue} />
      <ellipse cx="420" cy="410" rx="64" ry="66" fill={v === 2 ? C.pink : C.orange} className="art-bounce" />
      <circle cx="560" cy="210" r="62" fill={C.blue} opacity="0.6" />
      <g transform="translate(660 140)">
        <rect x="-70" y="-50" width="140" height="100" rx="24" fill={C.ink} />
        <path d="M-14-24l40 24-40 24z" fill={C.yellow} />
      </g>
    </>
  );
}

function Print({ v }: { v: number }) {
  return (
    <>
      <g transform={`rotate(${v === 1 ? 0 : -6} 330 300)`}>
        <rect x="130" y="110" width="400" height="300" rx="8" fill={C.paper} />
        <rect x="330" y="110" width="2" height="300" fill={C.ink} opacity="0.2" />
        <circle cx="230" cy="210" r="60" fill={C.yellow} />
        <rect x="160" y="300" width="140" height="12" rx="6" fill={C.ink} />
        <rect x="160" y="324" width="110" height="12" rx="6" fill={C.ink} opacity="0.5" />
        <rect x="360" y="140" width="140" height="150" rx="6" fill={C.blue} />
        <rect x="360" y="310" width="140" height="10" rx="5" fill={C.ink} opacity="0.5" />
        <rect x="360" y="330" width="100" height="10" rx="5" fill={C.ink} opacity="0.3" />
      </g>
      {v !== 1 && (
        <g transform="rotate(12 600 400)">
          <rect x="500" y="330" width="220" height="130" rx="10" fill={C.ink} />
          <text
            x="525"
            y="405"
            fill={C.paper}
            fontFamily="Bricolage Grotesque, sans-serif"
            fontWeight="800"
            fontSize="40"
          >
            hello!
          </text>
          <circle cx="680" cy="365" r="14" fill={C.yellow} />
        </g>
      )}
      {v === 2 && (
        <g transform="rotate(-14 160 470)">
          <rect x="70" y="420" width="200" height="110" rx="10" fill={C.orange} />
        </g>
      )}
    </>
  );
}

function Product({ v }: { v: number }) {
  const body = v === 2 ? C.blue : C.pink;
  return (
    <>
      <circle cx="400" cy="300" r="250" fill={v === 1 ? C.yellow : C.blue} opacity={v === 1 ? 1 : 0.12} />
      <ellipse cx="400" cy="500" rx="200" ry="22" fill={C.ink} opacity="0.15" />
      <g className="art-bob">
        <rect x="260" y="230" width="280" height="250" rx="70" fill={body} />
        <rect x="290" y="260" width="220" height="120" rx="40" fill={C.ink} />
        <circle cx="355" cy="320" r="16" fill={C.yellow} />
        <circle cx="445" cy="320" r="16" fill={C.yellow} />
        <rect x="320" y="410" width="160" height="28" rx="14" fill={C.paper} opacity="0.85" />
        <path d="M400 230v-70" stroke={C.ink} strokeWidth="10" strokeLinecap="round" />
        <circle cx="400" cy="148" r="22" fill={C.orange} />
      </g>
      {v === 0 && (
        <g fill="none" stroke={C.ink} strokeWidth="3" strokeDasharray="8 10" opacity="0.5">
          <circle cx="400" cy="340" r="220" />
          <path d="M120 340h560M400 90v460" />
        </g>
      )}
    </>
  );
}

const renderers: Record<ArtKind, (bg: string, v: number) => ReactNode> = {
  identity: (bg, v) => <Identity bg={bg} v={v} />,
  poster: (bg, v) => <Poster bg={bg} v={v} />,
  packaging: (_bg, v) => <Packaging v={v} />,
  social: (bg, v) => <Social bg={bg} v={v} />,
  illustration: (_bg, v) => <Illustration v={v} />,
  motion: (_bg, v) => <Motion v={v} />,
  print: (_bg, v) => <Print v={v} />,
  product: (_bg, v) => <Product v={v} />,
};

export function ProjectArt({ kind, bg, variant = 0, className, label = 'Placeholder artwork' }: ArtProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
    >
      <rect width="800" height="600" fill={bg} />
      {renderers[kind](bg, variant)}
    </svg>
  );
}
