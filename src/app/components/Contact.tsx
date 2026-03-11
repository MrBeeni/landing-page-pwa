import { WhatsAppLogo } from './icons/WhatsAppLogo';
import { PhoneLogo } from './icons/PhoneLogo';
import { GitHubLogo } from './icons/GitHubLogo';
import { UpworkLogo } from './icons/UpworkLogo';
import { LinkedInLogo } from './icons/LinkedInLogo';

const contactLinks = [
  {
    Logo: WhatsAppLogo,
    label: 'WhatsApp',
    href: 'https://wa.me/923148131429',
    bgColor: '#E8F7EF',
  },
  {
    Logo: PhoneLogo,
    label: 'Phone',
    href: 'tel:+923148131429',
    bgColor: '#E8F5E9',
  },
  {
    Logo: GitHubLogo,
    label: 'GitHub',
    href: 'https://github.com',
    bgColor: '#F5F5F5',
  },
  {
    Logo: UpworkLogo,
    label: 'Upwork',
    href: 'https://upwork.com',
    bgColor: '#EEFBF4',
  },
  {
    Logo: LinkedInLogo,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    bgColor: '#E7F3FF',
  },
];

export function Contact() {
  return (
    <section className="py-20 px-6 bg-[var(--section-bg)]">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Work Together
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and build something amazing.
            </p>
            <a 
              href="mailto:mubeen4429@gmail.com"
              className="inline-block text-xl font-semibold text-[var(--primary)] hover:underline"
            >
              mubeen4429@gmail.com
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {contactLinks.map((link, index) => {
              const Logo = link.Logo;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 bg-[var(--card-bg)] rounded-2xl p-6 md:p-8 shadow-md border border-[var(--border)] hover:shadow-xl hover:scale-110 transition-all duration-300 min-w-[140px] hover:border-[var(--primary)]"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: link.bgColor }}
                  >
                    <Logo className="w-9 h-9" />
                  </div>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}