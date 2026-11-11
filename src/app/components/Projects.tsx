import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SpotlightCard } from './fx/SpotlightCard';
import { SectionHeading } from './fx/SectionHeading';

const projects = [
  {
    title: 'WhatsApp Agentic E-Commerce Platform',
    description: 'LangGraph-powered conversational commerce on WhatsApp with AI-driven trade-in valuation, product recommendations, and integrated M-Pesa STK push payments — fully automated end-to-end.',
    image: 'https://images.unsplash.com/photo-1704383110020-86b408af4ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGF0c2FwcCUyMGUtY29tbWVyY2UlMjBzaG9wcGluZyUyMG1vYmlsZXxlbnwxfHx8fDE3NzU3NTc0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['LangGraph', 'WhatsApp API', 'M-Pesa', 'Multi-Agent'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
  {
    title: 'Enterprise Bid Generation Agent',
    description: 'LangGraph multi-agent system that auto-generates customized RFP responses by analyzing requirement docs and retrieving past proposals; reduced bid preparation time by 65%.',
    image: 'https://images.unsplash.com/photo-1692255359792-bc8bf9985925?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRvY3VtZW50cyUyMHByb3Bvc2FsJTIwZW50ZXJwcmlzZXxlbnwxfHx8fDE3NzU3NTc0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['LangGraph', 'RAG', 'Document AI', 'Automation'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
  {
    title: 'MCP-Integrated Enterprise RAG System',
    description: 'Built an MCP server (FastMCP) wrapping a domain-specific RAG pipeline, enabling portable tool integration across Claude, VS Code, and custom agent backends. Improved factual accuracy 47% vs. base LLM.',
    image: 'https://images.unsplash.com/photo-1667984390533-64bdefe719ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neSUyMGludGVncmF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc3NTc1NzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['FastMCP', 'RAG', 'Claude', 'Enterprise AI'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
  {
    title: 'GEO Intelligence Platform',
    description: 'Scalable LLM evaluation platform generating prompt variants, running multi-temperature sampling experiments, and analyzing AI brand visibility across generative search engines with cost tracking.',
    image: 'https://images.unsplash.com/photo-1587400563356-2f6cf901cfbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9ncmFwaGljJTIwaW50ZWxsaWdlbmNlJTIwbWFwJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3NTc1NzQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['LLM Evaluation', 'Analytics', 'SEO Intelligence', 'Pipeline'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
  {
    title: 'Reasoning Model Evaluation Framework',
    description: 'Designed a benchmarking system comparing o3, DeepSeek-R1, and Gemini Thinking models across enterprise use cases; delivered actionable model-selection guidance reducing inference costs by 30%.',
    image: 'https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZXZhbHVhdGlvbiUyMGJlbmNobWFya3xlbnwxfHx8fDE3NzU3NTc0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['o3', 'DeepSeek-R1', 'Benchmarking', 'Cost Optimization'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
  {
    title: 'Medical Knowledge Assistant',
    description: 'Healthcare-focused RAG system using specialized medical embeddings and clinical knowledge bases; achieved 93% accuracy on physician-verified test cases.',
    image: 'https://images.unsplash.com/photo-1767716134786-92b647b12846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHRlY2hub2xvZ3klMjBhc3Npc3RhbnR8ZW58MXx8fHwxNzc1NzU3NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Healthcare', 'RAG', 'Medical AI', 'High Accuracy'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
  {
    title: 'LLM Fine-tuning Pipeline (LoRA/QLoRA)',
    description: 'Automated pipeline for parameter-efficient fine-tuning of open-source LLMs on proprietary data; reduced training costs by 68% vs. full fine-tuning.',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB0cmFpbmluZyUyMHBpcGVsaW5lfGVufDF8fHx8MTc3NTc1NzQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['LoRA', 'QLoRA', 'Fine-tuning', 'Cost Efficiency'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
  {
    title: 'Rice Disease Identification System',
    description: 'Integrating SVM with deep CNN for rice disease identification and classification. Published research with 150 citations (Google Scholar) in IEEE ICASERT 2019.',
    image: 'https://images.unsplash.com/photo-1633555412302-152f85ae4fe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGxhbnQlMjBkaXNlYXNlJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzc1NzU3NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Computer Vision', 'SVM', 'CNN', 'Agriculture'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
];

const categoryOf: Record<string, string> = {
  'WhatsApp Agentic E-Commerce Platform': 'Agents',
  'Enterprise Bid Generation Agent': 'Agents',
  'MCP-Integrated Enterprise RAG System': 'RAG',
  'Medical Knowledge Assistant': 'RAG',
  'GEO Intelligence Platform': 'Evaluation',
  'Reasoning Model Evaluation Framework': 'Evaluation',
  'LLM Fine-tuning Pipeline (LoRA/QLoRA)': 'Training',
  'Rice Disease Identification System': 'Research',
};
const filters = ['All', 'Agents', 'RAG', 'Evaluation', 'Training', 'Research'];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = projects
    .map((p, i) => ({ ...p, n: String(i + 1).padStart(2, '0'), category: categoryOf[p.title] ?? 'Other' }))
    .filter((p) => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="01"
          label="Projects"
          title="Featured Projects"
          subtitle="Production-grade AI systems with measurable business impact"
        />

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`relative font-tech text-sm px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                filter === f
                  ? 'text-[#04060d] border-transparent'
                  : 'text-white/60 border-white/10 hover:text-white hover:border-cyan-400/50'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
              >
                <SpotlightCard tilt className="group h-full flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 saturate-50 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070914] via-[#070914]/40 to-transparent" />
                    <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-cyan-500/30 to-violet-600/30" />
                    <span className="absolute top-4 left-4 font-tech text-xs text-cyan-300 bg-black/50 backdrop-blur px-2.5 py-1 rounded-md border border-cyan-400/30">
                      {project.n} / {project.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/65 mb-5 line-clamp-3 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip font-tech">{tag}</span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost !py-2 !px-4 text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a href={project.demo} className="btn-neon !py-2 !px-4 text-sm">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
