import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="size-full bg-black overflow-x-hidden">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
