import { motion } from 'motion/react';
import { Brain, Code, Database, Wrench, Cpu, Layers, Cloud, Package } from 'lucide-react';

const skillCategories = [
  {
    title: 'Agentic & GenAI',
    icon: Brain,
    skills: ['LLM Fine-tuning', 'Prompt Engineering', 'RAG', 'Agentic RAG', 'MCP', 'AI Agents', 'Multimodal AI', 'LLMOps'],
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
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'AutoGen (AG2)', 'FastMCP', 'PyTorch', 'TensorFlow'],
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
    title: 'Vector Databases',
    icon: Database,
    skills: ['Pinecone', 'Chroma', 'Qdrant', 'Weaviate', 'MySQL', 'SQLServer'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    skills: ['AWS (SageMaker, Lambda, S3)', 'Azure (OpenAI Service)', 'Vertex AI', 'MLflow', 'Weights & Biases', 'Docker'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['HuggingFace', 'ComfyUI', 'Gradio', 'Streamlit', 'Selenium', 'GitHub Actions', 'Linux'],
    color: 'from-rose-500 to-pink-500',
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building production-grade AI applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all h-full">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        className="px-3 py-1.5 bg-white/10 rounded-lg text-sm text-white/80 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover effect gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}