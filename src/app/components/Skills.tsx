import { motion } from 'motion/react';
import { SpotlightCard } from './fx/SpotlightCard';
import { SectionHeading } from './fx/SectionHeading';
import { Brain, Code, Database, Wrench, Cpu, Layers, Cloud, Package } from 'lucide-react';

const skillCategories = [
  {
    title: 'Agentic & GenAI',
    icon: Brain,
    skills: ['LLM Fine-tuning', 'Prompt Engineering', 'RAG', 'Agentic RAG', 'MCP', 'AI Agents', 'Multimodal AI', 'LLMOps', 'Evaluation Harnesses'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Reasoning Models',
    icon: Cpu,
    skills: ['o3/o4', 'DeepSeek-R1', 'Gemini Thinking', 'Guardrails', 'Red Teaming', 'Model Evaluation'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI Frameworks',
    icon: Layers,
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'AutoGen (AG2)', 'FastMCP', 'Pydantic', 'PyTorch', 'TensorFlow'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python (Expert)', 'SQL', 'C (Intermediate)', 'FastAPI', 'Flask', 'Git & GitHub'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'AI Libraries',
    icon: Package,
    skills: ['Transformers', 'FAISS', 'Sentence-Transformers', 'NLTK', 'SpaCy', 'NumPy', 'Pandas', 'OpenCV'],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Retrieval & Databases',
    icon: Database,
    skills: ['PostgreSQL + pgvector (HNSW)', 'Hybrid Ranking', 'Reranking', 'Recall@k / MRR / nDCG', 'Pinecone', 'Chroma', 'Qdrant', 'Weaviate', 'Redis', 'MySQL', 'SQLServer'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    skills: ['AWS (SageMaker, Lambda, S3, ECS)', 'Azure (OpenAI Service)', 'Vertex AI', 'MLflow', 'Weights & Biases', 'LangSmith', 'Docker'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['HuggingFace', 'ComfyUI', 'Gradio', 'Streamlit', 'Selenium', 'GitHub Actions', 'Celery', 'Prometheus', 'Grafana', 'Linux'],
    color: 'from-rose-500 to-pink-500',
  },
];

const marqueeItems = [
  'LangGraph', 'LangChain', 'RAG', 'pgvector', 'HNSW', 'MCP', 'FastAPI', 'Pydantic', 'LangSmith',
  'PyTorch', 'CrewAI', 'LlamaIndex', 'AWS', 'Docker', 'Redis', 'Celery', 'GitHub Actions', 'LLMOps',
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="02"
          label="Skills"
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit for building production-grade AI applications"
        />

        <div className="marquee mb-14" aria-hidden>
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-tech text-sm text-white/45 px-6 py-2 whitespace-nowrap flex items-center gap-6"
              >
                {item}
                <span className="text-cyan-400/60">◆</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              >
                <SpotlightCard tilt className="h-full p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <IconComponent className="text-white" size={22} />
                    </div>
                    <span className="font-tech text-xs text-white/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="chip font-tech">{skill}</span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
