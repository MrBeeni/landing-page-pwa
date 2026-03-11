import { Download, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50 animate-fade-in">
      <div className="bg-[var(--card-bg)] rounded-2xl shadow-2xl border-2 border-[var(--primary)] p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
              <Download className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)]">Install App</h3>
              <p className="text-sm text-[var(--text-secondary)]">Add to Home Screen</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-sm text-[var(--text-secondary)] mb-4">
          Install this portfolio for quick access and offline viewing
        </p>
        
        <button
          onClick={handleInstallClick}
          className="w-full px-6 py-3 bg-[var(--primary)] text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Install Now
        </button>
      </div>
    </div>
  );
}
