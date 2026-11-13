import {
  BookOpen,
  Brush,
  Clapperboard,
  CreditCard,
  Film,
  Heart,
  Layers,
  Lightbulb,
  Package,
  Palette,
  PenTool,
  Printer,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  ink: string;
}

export const services: Service[] = [
  {
    title: 'Logo Design',
    description: 'Simple, memorable marks that say a lot with very little.',
    icon: PenTool,
    color: '#FF007F',
    ink: '#FAF8F5',
  },
  {
    title: 'Brand Identity',
    description: 'Colours, type and visual systems that make a brand feel like itself.',
    icon: Palette,
    color: '#FFE36E',
    ink: '#080808',
  },
  {
    title: 'Business Card Design',
    description: 'Small cards with a big first impression.',
    icon: CreditCard,
    color: '#5865F2',
    ink: '#FAF8F5',
  },
  {
    title: 'Brochures & Pamphlets',
    description: 'Clear, good-looking layouts that people actually want to read.',
    icon: BookOpen,
    color: '#FF814A',
    ink: '#080808',
  },
  {
    title: 'Catalog Design',
    description: 'Organised, browsable catalogues that make products shine.',
    icon: Layers,
    color: '#FAF8F5',
    ink: '#080808',
  },
  {
    title: 'Video Editing',
    description: 'Tight cuts, good rhythm and a story that keeps people watching.',
    icon: Clapperboard,
    color: '#FF007F',
    ink: '#FAF8F5',
  },
  {
    title: '2D Animation',
    description: 'Shapes, characters and type that move with personality.',
    icon: Film,
    color: '#FFE36E',
    ink: '#080808',
  },
  {
    title: 'Illustration',
    description: 'Custom drawings and characters with a playful twist.',
    icon: Brush,
    color: '#5865F2',
    ink: '#FAF8F5',
  },
  {
    title: 'Packaging Design',
    description: 'Packs that stand out on the shelf and feel great in the hand.',
    icon: Package,
    color: '#FF814A',
    ink: '#080808',
  },
  {
    title: 'Product Design',
    description: 'From rough idea to polished, considered product concept.',
    icon: Lightbulb,
    color: '#FAF8F5',
    ink: '#080808',
  },
  {
    title: 'Social Media Content',
    description: 'Scroll-stopping posts, stories and templates.',
    icon: Heart,
    color: '#FF007F',
    ink: '#FAF8F5',
  },
  {
    title: 'Print Media',
    description: 'Posters, flyers and everything that smells like fresh ink.',
    icon: Printer,
    color: '#FFE36E',
    ink: '#080808',
  },
];
