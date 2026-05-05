import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Техобслуживание', path: '/to' },
  { label: 'Дооснащение', path: '/doosnashenie' },
  { label: 'ОСАГО', path: '/osago' },
  { label: 'Запчасти', path: '/zapchasti' },
  { label: 'Сигнализация', path: '/signalizatsiya' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#04080f]/95 backdrop-blur-md border-b border-blue-900/40 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center glow-blue group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-display font-bold text-lg">D</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-widest text-white leading-none glow-blue-text">
                DSSERVIS
              </span>
              <span className="text-blue-400 text-[10px] tracking-[0.2em] uppercase font-body">
                Автосервис
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-ds font-display font-400 text-sm tracking-wider uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-400 active'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+78001234567"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-body text-sm"
            >
              <Icon name="Phone" size={16} />
              <span>8 (800) 123-45-67</span>
            </a>
            <Link
              to="/to"
              className="btn-primary-ds px-5 py-2.5 rounded-lg text-sm font-display tracking-wider uppercase"
            >
              Записаться
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-blue-900/30 animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`font-display font-400 text-sm tracking-wider uppercase py-2.5 border-b border-blue-900/20 transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-400'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+78001234567"
              className="flex items-center gap-2 text-blue-400 font-body text-sm pt-2"
            >
              <Icon name="Phone" size={16} />
              8 (800) 123-45-67
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
