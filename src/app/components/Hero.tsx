import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  onHireClick: () => void;
  onWorkClick: () => void;
}

export function Hero({ onHireClick, onWorkClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Muhammad Mubeen
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium">
            Full Stack Developer building modern web applications and SaaS platforms
          </p>
          
          <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            Freelance Full Stack Developer specializing in building scalable, modern web applications. 
            Expert in React.js, Next.js, TypeScript, Node.js, and Firebase. Crafting innovative solutions 
            for SaaS platforms, AI tools, dashboards, and enterprise applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={onHireClick}
              className="group px-8 py-4 bg-[var(--primary)] text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onWorkClick}
              className="px-8 py-4 bg-[var(--card-bg)] border-2 border-[var(--border)] text-[var(--text-primary)] rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:border-[var(--primary)] flex items-center justify-center gap-2"
            >
              View My Work
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}