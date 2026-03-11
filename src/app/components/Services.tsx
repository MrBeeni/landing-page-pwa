import { Code2, Rocket, Plug, Palette } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full Stack Web Development',
    description: 'Building end-to-end web applications with React.js, Next.js, TypeScript, and Node.js. Expertise in creating responsive, performant, and scalable solutions.',
  },
  {
    icon: Rocket,
    title: 'SaaS Application Development',
    description: 'Developing complete SaaS platforms from concept to deployment. Specializing in subscription models, user authentication, and multi-tenant architectures.',
  },
  {
    icon: Plug,
    title: 'API Development & Integration',
    description: 'Designing and implementing RESTful APIs and GraphQL services. Seamless third-party integrations with Firebase, PostgreSQL, and cloud platforms.',
  },
  {
    icon: Palette,
    title: 'Dashboard & Admin Panel Development',
    description: 'Creating powerful real-time dashboards and admin panels with advanced data visualization, analytics, and comprehensive management features.',
  },
];

export function Services() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Services
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
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
                      {service.title}
                    </h3>
                    
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {service.description}
                    </p>
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