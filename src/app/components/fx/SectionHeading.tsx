import { motion } from 'motion/react';

interface Props {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, label, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <div className="font-tech text-xs sm:text-sm tracking-[0.25em] uppercase text-cyan-400/90 flex items-center gap-3 mb-4">
        <span className="text-white/40">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient pb-1">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-white/60 max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}
