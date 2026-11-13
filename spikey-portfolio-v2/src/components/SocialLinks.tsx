import { ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';
import './SocialLinks.css';

interface SocialLinksProps {
  tone?: 'light' | 'dark';
}

/**
 * Social links from src/data/site.ts. Links without a URL are rendered as
 * clearly-marked placeholders (not clickable) instead of fake links.
 */
export function SocialLinks({ tone = 'dark' }: SocialLinksProps) {
  return (
    <ul className={`socials socials--${tone}`}>
      {site.socials.map((s) => (
        <li key={s.label}>
          {s.url ? (
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="socials__item">
              {s.label} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <span
              className="socials__item socials__item--placeholder"
              title={`Add your ${s.label} URL in src/data/site.ts`}
            >
              {s.label}
              <span className="socials__soon">link coming soon</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
