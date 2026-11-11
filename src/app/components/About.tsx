import { motion } from 'motion/react';
import { Award, Briefcase, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';
import { SpotlightCard } from './fx/SpotlightCard';
import { SectionHeading } from './fx/SectionHeading';
import { Counter } from './fx/Counter';
import { SCHOLAR, SCHOLAR_URL, publications } from '../constants';

const achievements = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Sc. in Electrical & Electronic Engineering from HSTU (CGPA: 3.34/4.00)',
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: '5+ years building production-ready AI systems; now Senior Python & AI Agent Engineer at HeartStamp, with clients across the US, Singapore, and Bangladesh',
  },
  {
    icon: Award,
    title: 'Research',
    description: `3 published IEEE papers with ${SCHOLAR.citations} citations on Google Scholar (h-index ${SCHOLAR.hIndex}), specializing in deep learning applications`,
  },
  {
    icon: Sparkles,
    title: 'Impact',
    description: 'Reduced costs by 30-68% through AI optimization and automated 65% faster bid generation',
  },
];

const experiences = [
  {
    company: 'HeartStamp, Inc.',
    role: 'Senior Python & AI Agent Engineer',
    period: 'Sep 2026 – Present',
    location: 'Las Vegas, USA (Remote)',
  },
  {
    company: 'Omnexis AI',
    role: 'Senior AI Engineer',
    period: 'Feb 2026 – Sep 2026',
    location: 'Remote',
  },
  {
    company: 'Artech Digital',
    role: 'GenAI Engineer',
    period: 'Nov 2024 – Jan 2026',
    location: 'San Francisco, USA (Remote)',
  },
  {
    company: 'Spekter GmbH',
    role: 'Machine Learning Engineer',
    period: 'Jan 2024 – Nov 2024',
    location: 'Dhaka, Bangladesh',
  },
  {
    company: 'SkyRanko',
    role: 'Software Engineer – AI & NLP',
    period: 'Jan 2023 – Dec 2023',
    location: 'Rajshahi, Bangladesh',
  },
  {
    company: 'Zibew E-Commerce PTE Ltd.',
    role: 'Software Engineer – NLP',
    period: 'Mar 2022 – Dec 2022',
    location: 'Singapore (Remote)',
  },
  {
    company: 'Opus Technology Ltd.',
    role: 'Artificial Intelligence Engineer',
    period: 'Jul 2021 – Feb 2022',
    location: 'Dhaka, Bangladesh',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="03"
          label="About"
          title="About Me"
          subtitle="Building the future of AI, one system at a time"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-8 hud">
              <h3 className="font-display text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I'm a Senior Python, Generative AI & Agentic Systems Engineer with over 5 years of experience building production-grade AI solutions. Today I own the agent runtime, retrieval, and evaluation layers of a consumer conversational assistant at HeartStamp, moving decisions out of model output and into deterministic, validated, checkpointed system state.
                </p>
                <p>
                  My expertise lies in multi-agent orchestration (LangGraph), RAG and hybrid retrieval on PostgreSQL + pgvector, evaluation harnesses that run in CI on every pull request, and MCP-based tool integration that deliver measurable business impact.
                </p>
                <p>
                  Throughout my career, I've worked with clients across the US, Singapore, and Bangladesh, developing everything from WhatsApp-based e-commerce platforms powered by LangGraph to enterprise bid generation agents that reduced preparation time by 65%.
                </p>
                <p>
                  I'm proficient in LLM fine-tuning (LoRA/QLoRA), reasoning model evaluation (o3/DeepSeek-R1), multimodal AI, and LLMOps pipelines. My work focuses on not just building AI systems, but ensuring they're robust, cost-efficient, and production-ready.
                </p>
                <p>
                  My research has been published in IEEE conferences, with my work on rice disease identification receiving 150 citations. I'm passionate about pushing the boundaries of what's possible with AI while maintaining best practices in security, monitoring, and model governance.
                </p></div>
            </SpotlightCard>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SpotlightCard tilt className="p-6 h-full">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 mb-4">
                      <IconComponent className="text-white" size={22} />
                    </div>
                    <h4 className="font-display text-xl font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{achievement.description}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience timeline */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-bold text-white mb-10">Professional Experience</h3>
          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent" />
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.06 }}
                  className="relative"
                >
                  <span
                    className={`absolute -left-8 md:-left-10 top-7 w-4 h-4 md:w-[19px] md:h-[19px] rounded-full border-2 border-cyan-400 bg-[#05060f] ${
                      index === 0 ? 'pulse-dot !bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]' : 'shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                    }`}
                  />
                  <SpotlightCard className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h4 className="font-display text-xl font-bold text-white">{exp.role}</h4>
                      <span className="font-tech text-sm text-cyan-400">
                        {exp.period}
                        {index === 0 && <span className="ml-3 text-lime-400">● current</span>}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-white/60">
                      <span className="font-semibold text-white/80">{exp.company}</span>
                      <span className="hidden md:inline text-white/30">/</span>
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {[
            { label: 'Years of Experience', value: '5+' },
            { label: 'Research Citations', value: String(SCHOLAR.citations) },
            { label: 'h-index', value: String(SCHOLAR.hIndex) },
            { label: 'Max Cost Reduction', value: '68%' },
          ].map((stat) => (
            <SpotlightCard key={stat.label} className="p-6 text-center">
              <div className="font-display text-5xl font-bold text-gradient mb-2">
                <Counter value={stat.value} />
              </div>
              <div className="font-tech text-xs uppercase tracking-wider text-white/50">{stat.label}</div>
            </SpotlightCard>
          ))}
        </div>

        {/* Publications */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h3 className="font-display text-3xl font-bold text-white">Publications</h3>
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-tech text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2"
            >
              Google Scholar <ExternalLink size={14} />
            </a>
          </div>
          <div className="space-y-4">
            {publications.map((pub) => (
              <SpotlightCard key={pub.title} className="p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-1">
                    <p className="text-white font-medium leading-snug">{pub.title}</p>
                    <p className="font-tech text-xs text-white/45 mt-2">
                      {pub.venue} · {pub.year}
                    </p>
                  </div>
                  <div className="shrink-0 text-left md:text-right">
                    <div className="font-display text-3xl font-bold text-gradient">{pub.citations}</div>
                    <div className="font-tech text-[11px] uppercase tracking-wider text-white/40">citations</div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
