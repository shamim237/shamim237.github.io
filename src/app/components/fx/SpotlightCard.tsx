import { useRef, type HTMLAttributes, type ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Subtle 3D tilt that follows the pointer. */
  tilt?: boolean;
}

/** Glass card whose spotlight (and optional tilt) follows the cursor. */
export function SpotlightCard({ children, className = '', tilt = false, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (tilt) {
      const px = x / r.width - 0.5;
      const py = y / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${-py * 5}deg) rotateY(${px * 5}deg)`;
    }
  };
  const onLeave = () => {
    if (ref.current && tilt) ref.current.style.transform = '';
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`spot-card ${className}`} {...rest}>
      {children}
    </div>
  );
}
