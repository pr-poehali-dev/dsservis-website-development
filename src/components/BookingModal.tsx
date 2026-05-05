import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface BookingModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export default function BookingModal({ forceOpen, onClose }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 1 minute
    return () => clearTimeout(timer);
  }, [forceOpen]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      onClose?.();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-slide-up">
        <div className="card-dark rounded-2xl p-8 border border-blue-500/30 glow-blue">
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <Icon name="X" size={20} />
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Icon name="Calendar" size={24} className="text-white" />
                </div>
                <h2 className="font-display text-2xl font-600 text-white tracking-wide mb-1">
                  Запись онлайн
                </h2>
                <p className="text-gray-400 text-sm font-body">
                  Оставьте контакты — мы перезвоним и подберём удобное время
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Icon name="User" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-blue-950/30 border border-blue-800/40 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm font-body focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Icon name="Phone" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-blue-950/30 border border-blue-800/40 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm font-body focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Icon name="Mail" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
                  <input
                    type="email"
                    placeholder="Email адрес"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-blue-950/30 border border-blue-800/40 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm font-body focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary-ds w-full py-3.5 rounded-xl text-sm tracking-widest uppercase mt-1"
                >
                  Записаться на визит
                </button>
              </form>

              <p className="text-gray-600 text-xs text-center mt-3 font-body">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-green-400" />
              </div>
              <h3 className="font-display text-xl text-white mb-2">Заявка принята!</h3>
              <p className="text-gray-400 text-sm font-body">Мы свяжемся с вами в ближайшее время</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
