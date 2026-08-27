import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { TechStack } from './components/TechStack';
import { DSAJourney } from './components/DSAJourney';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <TechStack />
        <DSAJourney />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}