import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

const achievements = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Sc. in Electrical & Electronic Engineering from HSTU (CGPA: 3.34/4.00)',
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: '5+ years building production-ready AI systems for enterprises across US, Singapore, and Bangladesh',
  },
  {
    icon: Award,
    title: 'Research',
    description: '3 published IEEE papers with 156+ total citations, specializing in deep learning applications',
  },
  {
    icon: Sparkles,
    title: 'Impact',
    description: 'Reduced costs by 30-68% through AI optimization and automated 65% faster bid generation',
  },
];

const experiences = [
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
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Building the future of AI, one system at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-white/70">
                <p>
                  I'm a Senior Generative AI & Agentic Systems Engineer with over 5 years of experience building production-grade AI solutions. My expertise lies in designing multi-agent orchestration systems, RAG architectures, and MCP-based tool integration that deliver measurable business impact.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with enterprise clients across the US, Singapore, and Bangladesh, developing everything from WhatsApp-based e-commerce platforms powered by LangGraph to enterprise bid generation agents that reduced preparation time by 65%.
                </p>
                <p>
                  I'm proficient in LLM fine-tuning (LoRA/QLoRA), reasoning model evaluation (o3/DeepSeek-R1), multimodal AI, and LLMOps pipelines. My work focuses on not just building AI systems, but ensuring they're robust, cost-efficient, and production-ready.
                </p>
                <p>
                  My research has been published in IEEE conferences, with my work on rice disease identification receiving 141 citations. I'm passionate about pushing the boundaries of what's possible with AI while maintaining best practices in security, monitoring, and model governance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-white/60 text-sm">{achievement.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <span className="text-cyan-400 text-sm">{exp.period}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-white/60">
                  <span className="font-semibold">{exp.company}</span>
                  <span className="hidden md:inline">•</span>
                  <span className="text-sm">{exp.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years of Experience', value: '5+' },
            { label: 'Research Citations', value: '156+' },
            { label: 'Published Papers', value: '3' },
            { label: 'Cost Reduction', value: '68%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
