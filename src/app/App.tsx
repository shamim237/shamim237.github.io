import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ParticleField } from './components/fx/ParticleField';
import { CursorGlow } from './components/fx/CursorGlow';
import { ScrollProgress } from './components/fx/ScrollProgress';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05060f] overflow-x-hidden">
      <ParticleField />
      <CursorGlow />
      <ScrollProgress />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </div>
  );
}
