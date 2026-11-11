import { motion } from 'motion/react';
import { GraduationCap, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { SpotlightCard } from './fx/SpotlightCard';
import { SectionHeading } from './fx/SectionHeading';
import { SCHOLAR_URL } from '../constants';

const links = [
  { label: 'GitHub', href: 'https://github.com/shamim237', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shamim237/', Icon: Linkedin },
  { label: 'Google Scholar', href: SCHOLAR_URL, Icon: GraduationCap },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a demo form.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          index="04"
          label="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-8 hud">
              <h3 className="font-display text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Mail className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-tech text-xs uppercase tracking-wider text-white/45 mb-1">Email</h4>
                    <a href="mailto:sha237mim@gmail.com" className="text-white hover:text-cyan-300 transition-colors">
                      sha237mim@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500">
                    <MapPin className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-tech text-xs uppercase tracking-wider text-white/45 mb-1">Location</h4>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-tech text-xs uppercase tracking-wider text-white/45 mb-3">Elsewhere</h4>
                  <div className="flex flex-wrap gap-3">
                    {links.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost !py-2 !px-4 text-sm"
                      >
                        <Icon size={16} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-500/10">
                <p className="text-white/80 leading-relaxed">
                  Available for consulting, freelance projects, and full-time opportunities in Generative AI and Agentic Systems. Open to remote and hybrid work arrangements.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-8">
              <div className="font-tech text-xs text-white/40 mb-6">
                <span className="text-lime-400">$</span> ./send-message --to shamim
              </div>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-tech text-xs uppercase tracking-wider text-white/55 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-tech text-xs uppercase tracking-wider text-white/55 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="field"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-tech text-xs uppercase tracking-wider text-white/55 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="btn-neon w-full cursor-pointer">
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </SpotlightCard>
          </motion.form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 text-center text-white/40 font-tech text-sm">
        <p>© 2026 Shamim Mahbub. Built with love and more.</p>
        <p className="mt-2 text-xs">Dhaka, Bangladesh | sha237mim@gmail.com</p>
      </div>
    </section>
  );
}
