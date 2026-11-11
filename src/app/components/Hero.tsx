import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { SCHOLAR_URL } from '../constants';

const roles = [
  'Agentic Systems Engineer',
  'RAG & Retrieval Engineer',
  'LLMOps & Evaluation Engineer',
  'Senior Python Engineer',
];

function useTypewriter(words: string[], speed = 70, pause = 1700) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    if (!deleting && text === word) {
      const t = window.setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => i + 1);
      return;
    }
    const t = window.setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, speed, pause]);

  return text;
}

const terminal = [
  { k: 'runtime', v: 'LangGraph · LangChain · Pydantic' },
  { k: 'retrieval', v: 'pgvector · HNSW · hybrid + rerank' },
  { k: 'quality', v: 'Recall@k · MRR · nDCG' },
  { k: 'evals', v: 'CI harness on every pull request' },
  { k: 'tracing', v: 'LangSmith · Prometheus · Grafana' },
];

const socials = [
  { href: 'https://github.com/shamim237', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/shamim237/', label: 'LinkedIn', Icon: Linkedin },
  { href: SCHOLAR_URL, label: 'Google Scholar', Icon: GraduationCap },
  { href: 'mailto:sha237mim@gmail.com', label: 'Email', Icon: Mail },
];

export function Hero() {
  const role = useTypewriter(roles);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none float-slow" />
      <div className="absolute -bottom-40 -right-24 w-[34rem] h-[34rem] rounded-full bg-violet-600/25 blur-[130px] pointer-events-none float-slow" style={{ animationDelay: '-4s' }} />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 font-tech text-xs sm:text-sm text-cyan-300 mb-8"
          >
            <span className="pulse-dot relative w-2 h-2 rounded-full bg-lime-400" />
            Building agents @ HeartStamp
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6"
          >
            <span className="glitch text-gradient-animated" data-text="Shamim">Shamim</span>
            <br />
            <span className="glitch text-white" data-text="Mahbub">Mahbub</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-tech text-lg sm:text-2xl text-white/90 mb-6 h-9"
          >
            <span className="text-cyan-400">&gt; </span>
            {role}
            <span className="blink text-cyan-400">▍</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-lg text-white/65 mb-10 max-w-2xl leading-relaxed"
          >
            Senior Python, Generative AI &amp; Agentic Systems Engineer. Currently owning the agent runtime, retrieval, and evaluation layers of a consumer conversational assistant, with 5+ years building production-grade AI for clients in the US, Singapore, and Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button onClick={scrollToProjects} className="btn-neon cursor-pointer">
              View My Work
            </button>
            <a href="/Shamim_Mahbub_Resume_GenAI.pdf" download className="btn-ghost">
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex items-center gap-3"
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-white/80 hover:text-cyan-300 hover:border-cyan-400/60 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: system panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="hidden lg:block"
        >
          <div className="hud float-slow rounded-2xl border border-white/10 bg-[#070914]/80 backdrop-blur-xl shadow-[0_0_80px_-20px_rgba(139,92,246,0.55)]">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-3 font-tech text-xs text-white/40">shamim@agent-runtime: ~</span>
            </div>
            <div className="scanlines p-6 font-tech text-sm leading-7">
              <div className="text-white/50">$ system.describe()</div>
              {terminal.map((line, i) => (
                <motion.div
                  key={line.k}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.25 }}
                >
                  <span className="text-violet-400">{line.k.padEnd(10, ' ')}</span>
                  <span className="text-white/40">: </span>
                  <span className="text-cyan-300">{line.v}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
                className="mt-3 text-white/50"
              >
                $ <span className="text-lime-400">status</span> --ok <span className="blink text-cyan-400">▍</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={30} />
      </motion.div>
    </section>
  );
}
