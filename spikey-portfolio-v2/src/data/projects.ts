/**
 * Project data.
 *
 * ⚠️  Every project below is a PLACEHOLDER concept with generated SVG artwork.
 * Replace `title`, `summary`, `overview`, `deliverables` and set `images`
 * (paths inside /public) with your real work. When `images` is provided the
 * real images are shown instead of the placeholder artwork and the
 * "Placeholder" badge disappears.
 */

export type ArtKind =
  'identity' | 'poster' | 'packaging' | 'social' | 'illustration' | 'motion' | 'print' | 'product';

export type CardSize = 'lg' | 'md' | 'sm' | 'half' | 'wide';

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string[];
  deliverables: string[];
  /** Background colour of the card artwork. */
  color: string;
  /** Colour used for text placed on top of `color`. */
  ink: string;
  art: ArtKind;
  size: CardSize;
  /** Real project images (relative to /public), e.g. ['images/work/brand-01.webp']. */
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: 'pop-bloom-identity',
    title: 'Pop Bloom Identity',
    category: 'Branding & Identity',
    summary:
      'A bold, flower-powered identity system exploring how one simple mark can flex across a whole brand.',
    overview: [
      'Placeholder story — replace with your own. Describe the brief, the audience and the feeling the brand needed to communicate.',
      'Walk through the logo exploration, the colour and type decisions, and how the system scales from a tiny favicon to a giant billboard.',
    ],
    deliverables: ['Logo system', 'Colour palette', 'Typography', 'Brand guidelines'],
    color: '#FF007F',
    ink: '#FAF8F8',
    art: 'identity',
    size: 'lg',
  },
  {
    slug: 'noise-poster-series',
    title: 'Noise Poster Series',
    category: 'Poster & Graphic Design',
    summary:
      'Loud type, layered shapes and a little bit of chaos — a poster series built to be noticed from across the street.',
    overview: [
      'Placeholder story — replace with your own. Explain the theme of the series and what each poster was trying to say.',
      'Share the grid, the type experiments and the printing technique you used to bring the series to life.',
    ],
    deliverables: ['Poster series', 'Typography', 'Print production'],
    color: '#FFE36E',
    ink: '#131313',
    art: 'poster',
    size: 'md',
  },
  {
    slug: 'fizz-can-packaging',
    title: 'Fizz Can Packaging',
    category: 'Packaging Design',
    summary: 'Playful can graphics with a colour code for every flavour, designed to pop on a crowded shelf.',
    overview: [
      'Placeholder story — replace with your own. Describe the product, the shelf it lives on and the competitors around it.',
      'Show how the pattern, the colour system and the dieline came together into a family of packs.',
    ],
    deliverables: ['Packaging system', 'Dielines', 'Pattern design', 'Mockups'],
    color: '#5865F2',
    ink: '#FAF8F8',
    art: 'packaging',
    size: 'sm',
  },
  {
    slug: 'scroll-stopper-social-kit',
    title: 'Scroll-Stopper Social Kit',
    category: 'Social Media Design',
    summary:
      'A flexible set of social templates that keep a feed consistent, fun and easy to update every week.',
    overview: [
      'Placeholder story — replace with your own. Talk about the platforms, the posting rhythm and the goals of the content.',
      'Explain the template system — post, story and carousel formats — and how it stays fresh over time.',
    ],
    deliverables: ['Post templates', 'Stories', 'Carousels', 'Highlight covers'],
    color: '#FF814A',
    ink: '#131313',
    art: 'social',
    size: 'sm',
  },
  {
    slug: 'odd-creatures',
    title: 'Odd Creatures',
    category: 'Illustration',
    summary: 'A family of strange, friendly characters drawn with simple shapes and a lot of personality.',
    overview: [
      'Placeholder story — replace with your own. Introduce the characters and where they came from.',
      'Share sketches, the shape language and how the illustrations were used across different media.',
    ],
    deliverables: ['Character design', 'Illustration set', 'Sticker pack'],
    color: '#C31FA6',
    ink: '#FAF8F8',
    art: 'illustration',
    size: 'sm',
  },
  {
    slug: 'bounce-motion-loop',
    title: 'Bounce Motion Loop',
    category: 'Motion Graphics & Animation',
    summary: 'Squash, stretch and bounce — a looping motion piece that brings flat shapes to life.',
    overview: [
      'Placeholder story — replace with your own. Describe the idea behind the animation and where it was shown.',
      'Break down the storyboard, timing and easing choices. Consider embedding the final video here.',
    ],
    deliverables: ['Storyboard', '2D animation', 'Sound sync', 'Social cut-downs'],
    color: '#FFE36E',
    ink: '#131313',
    art: 'motion',
    size: 'half',
  },
  {
    slug: 'zine-and-print-collateral',
    title: 'Zine & Print Collateral',
    category: 'Print Design',
    summary: 'A tactile collection of zines, flyers and cards that celebrate paper, ink and imperfect print.',
    overview: [
      'Placeholder story — replace with your own. What was printed, for whom, and why print was the right medium.',
      'Share the paper stock, finishes and layout system that tie the collection together.',
    ],
    deliverables: ['Zine layout', 'Flyers', 'Business cards', 'Print finishing'],
    color: '#FF007F',
    ink: '#FAF8F8',
    art: 'print',
    size: 'half',
  },
  {
    slug: 'desk-buddy-product',
    title: 'Desk Buddy',
    category: 'Product Design',
    summary: 'A friendly desk object concept — from rough sketches to a polished, colourful product render.',
    overview: [
      'Placeholder story — replace with your own. Describe the problem the product solves and who uses it.',
      'Show sketches, form exploration, materials and the final renders or prototype.',
    ],
    deliverables: ['Concept sketches', 'Form study', 'Colour & material', 'Renders'],
    color: '#2BD9C9',
    ink: '#131313',
    art: 'product',
    size: 'wide',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
