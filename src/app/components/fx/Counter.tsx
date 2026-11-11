import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';

/** Counts up to a value like "171", "5+" or "68%" when scrolled into view. */
export function Counter({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : value;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
