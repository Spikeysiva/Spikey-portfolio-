import { useEffect, useRef } from 'react';
import './Cursor.css';

/**
 * Desktop-only playful cursor follower. The native cursor stays visible,
 * so usability is never affected. Disabled on touch devices and when the
 * user prefers reduced motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!finePointer || reduced || !dot || !ring || !label) return;

    document.documentElement.classList.add('has-cursor');
    let x = -100;
    let y = -100;
    let rx = x;
    let ry = y;
    let raf = 0;
    let visible = false;

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) raf = requestAnimationFrame(loop);
      else raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        document.documentElement.classList.add('cursor-visible');
      }
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onOver = (e: Event) => {
      const target = e.target as Element | null;
      const labelled = target?.closest<HTMLElement>('[data-cursor]');
      const interactive = target?.closest('a, button, input, textarea, select, label, [role="button"]');
      ring.classList.toggle('is-hover', !!interactive && !labelled);
      ring.classList.toggle('is-label', !!labelled);
      label.textContent = labelled?.dataset.cursor ?? '';
    };

    const onLeave = () => {
      visible = false;
      document.documentElement.classList.remove('cursor-visible');
    };
    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.classList.remove('has-cursor', 'cursor-visible');
    };
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <div ref={ringRef} className="cursor__ring">
        <span ref={labelRef} className="cursor__label" />
      </div>
      <div ref={dotRef} className="cursor__dot" />
    </div>
  );
}
