import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeSwitcher, Theme } from './components/ThemeSwitcher';
import { InstallPWA } from './components/InstallPWA';

function App() {
  const [theme, setTheme] = useState<Theme>('green');

  const handleHireClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorkClick = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`theme-${theme} min-h-screen bg-[var(--bg)]`}>
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />
      <InstallPWA />
      
      <main>
        <Hero onHireClick={handleHireClick} onWorkClick={handleWorkClick} />
        <About />
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;