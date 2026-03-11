import { Palette } from 'lucide-react';
import { useState } from 'react';

export type Theme = 'green' | 'blue' | 'purple' | 'dark' | 'gradient' | 'minimal';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const themes: { id: Theme; name: string; preview: string }[] = [
  { id: 'green', name: 'Green Tech', preview: 'linear-gradient(135deg, #10b981, #34d399)' },
  { id: 'blue', name: 'Blue Modern', preview: 'linear-gradient(135deg, #3b82f6, #60a5fa)' },
  { id: 'purple', name: 'Purple Violet', preview: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' },
  { id: 'dark', name: 'Dark Mode', preview: 'linear-gradient(135deg, #1f2937, #374151)' },
  { id: 'gradient', name: 'Soft Gradient', preview: 'linear-gradient(135deg, #ec4899, #8b5cf6)' },
  { id: 'minimal', name: 'Minimal B&W', preview: 'linear-gradient(135deg, #000, #4b5563)' },
];

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[var(--card-bg)] shadow-xl border-2 border-[var(--border)] flex items-center justify-center hover:scale-110 transition-all duration-300 hover:border-[var(--primary)]"
        aria-label="Change theme"
      >
        <Palette className="w-6 h-6 text-[var(--primary)]" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-3 bg-[var(--card-bg)] rounded-2xl shadow-2xl border border-[var(--border)] p-4 min-w-[200px]">
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-3 px-2">
            Choose Theme
          </p>
          <div className="space-y-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--section-bg)] transition-colors ${
                  currentTheme === theme.id ? 'bg-[var(--section-bg)]' : ''
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full border-2 border-[var(--border)]"
                  style={{ background: theme.preview }}
                />
                <span className="text-sm font-medium text-[var(--text-primary)]">
                  {theme.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
