import { useEffect, useRef } from 'react';

/** Soft cyan/violet light that trails the pointer. Hidden on touch devices. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let x = tx;
    let y = ty;
    let raf = 0;

    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = '1';
    };
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 z-[1] w-[500px] h-[500px] rounded-full pointer-events-none opacity-0 transition-opacity duration-500"
      style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.10), rgba(139,92,246,0.06) 45%, transparent 70%)' }}
    />
  );
}
