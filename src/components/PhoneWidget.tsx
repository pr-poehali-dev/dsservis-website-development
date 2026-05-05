import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

export default function PhoneWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 120000); // 2 minutes
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[150] animate-slide-in-bottom">
      <div className="card-dark rounded-2xl p-4 border border-blue-500/30 shadow-2xl max-w-[260px]">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
        >
          <Icon name="X" size={12} />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0 animate-pulse-glow">
            <Icon name="PhoneCall" size={18} className="text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-display tracking-wide mb-0.5">
              Звоните прямо сейчас!
            </p>
            <p className="text-gray-400 text-xs font-body mb-2">
              Узнайте все детали по телефону
            </p>
            <a
              href="tel:+78001234567"
              className="btn-primary-ds px-3 py-1.5 rounded-lg text-xs inline-flex items-center gap-1.5 tracking-wider"
            >
              <Icon name="Phone" size={12} />
              8 (800) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
