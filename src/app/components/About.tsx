export function About() {
  return (
    <section className="py-20 px-6 bg-[var(--section-bg)]">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About Me
          </h2>
          
          <div className="bg-[var(--card-bg)] rounded-3xl p-8 md:p-12 shadow-lg border border-[var(--border)]">
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-center">
              As a dedicated Full Stack Developer, I specialize in building modern web applications, 
              SaaS platforms, AI-powered tools, and real-time dashboards. With deep expertise in 
              React.js, Next.js, TypeScript, Node.js, Tailwind CSS, Firebase, and PostgreSQL, 
              I transform complex ideas into scalable, high-performance solutions. From crafting 
              intuitive user interfaces to architecting robust backend systems, I'm passionate about 
              creating products that deliver exceptional user experiences and drive real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}