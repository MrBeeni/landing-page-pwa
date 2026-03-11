export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">
            Muhammad Mubeen
          </h3>
          <p className="text-[var(--text-secondary)] font-medium">
            Available for Freelance Projects
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            © {currentYear} Muhammad Mubeen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}