import { FileText, Compass, LayoutDashboard, Search } from 'lucide-react';

const projects = [
  {
    icon: FileText,
    title: 'Planscan',
    description: 'AI-based construction document processor that automates document analysis and extraction for construction projects.',
    tags: ['AI', 'Next.js', 'TypeScript'],
  },
  {
    icon: Compass,
    title: 'Rilati',
    description: 'Career discovery platform helping users explore and navigate their professional journey with personalized insights.',
    tags: ['React', 'Firebase', 'SaaS'],
  },
  {
    icon: LayoutDashboard,
    title: 'Waynaa Admin Dashboard',
    description: 'Real-time admin management system with comprehensive analytics, user management, and monitoring capabilities.',
    tags: ['Dashboard', 'Real-time', 'PostgreSQL'],
  },
  {
    icon: Search,
    title: 'Job Search Engine',
    description: 'Multi-board job scraping platform aggregating opportunities from various sources with advanced filtering.',
    tags: ['Web Scraping', 'Node.js', 'API'],
  },
];

export function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Building innovative solutions that solve real-world problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-[var(--card-bg)] rounded-2xl p-8 shadow-md border border-[var(--border)] hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-[var(--primary)]"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--primary)] bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm font-medium bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
