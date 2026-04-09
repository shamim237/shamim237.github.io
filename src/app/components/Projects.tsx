import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    description: 'Integrating SVM with deep CNN for rice disease identification and classification. Published research with 141 citations in IEEE ICASERT 2019.',
    image: 'https://images.unsplash.com/photo-1633555412302-152f85ae4fe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGxhbnQlMjBkaXNlYXNlJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzc1NzU3NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Computer Vision', 'SVM', 'CNN', 'Agriculture'],
    github: 'https://github.com/shamim237',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Building production-grade AI systems with measurable business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all text-white"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}