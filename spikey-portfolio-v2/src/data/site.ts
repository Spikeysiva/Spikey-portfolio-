/**
 * Global site configuration.
 *
 * ✏️  EDIT ME: fill in your real contact email and social profile URLs.
 * Anything left as an empty string is shown as a clearly-marked placeholder
 * instead of a fake link.
 */

export interface SocialLink {
  label: string;
  /** Full URL, e.g. https://www.behance.net/your-handle — leave empty until ready. */
  url: string;
}

export const site = {
  name: 'SPIKEY',
  role: 'Graphic Designer & Visual Creative',
  tagline: 'Making ordinary ideas look extraordinary.',
  /** Your contact email, e.g. "hello@yourdomain.com". Leave empty until ready. */
  email: '',
  availableForProjects: true,
  heroImage: `${import.meta.env.BASE_URL}images/spikey-hero.webp`,
  socials: [
    { label: 'Instagram', url: '' },
    { label: 'Behance', url: '' },
    { label: 'Dribbble', url: '' },
    { label: 'LinkedIn', url: '' },
  ] as SocialLink[],
};

export const hasEmail = site.email.trim().length > 0;

export const navLinks = [
  { id: 'top', label: 'Home' },
  { id: 'work', label: 'My Work' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navLinks)[number]['id'];
