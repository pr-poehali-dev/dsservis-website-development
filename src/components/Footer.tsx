import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-[#04080f] border-t border-blue-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">D</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-widest text-white">DSSERVIS</span>
            </div>
            <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">
              Профессиональное техническое обслуживание, дооснащение и подбор запчастей для вашего автомобиля.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-900/30 border border-blue-800/40 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Icon name="Send" size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-900/30 border border-blue-800/40 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Icon name="Instagram" size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-900/30 border border-blue-800/40 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Icon name="Youtube" size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white text-sm font-500 tracking-widest uppercase mb-4">Услуги</h4>
            <ul className="space-y-2">
              {[
                { label: 'Техобслуживание', path: '/to' },
                { label: 'Дооснащение', path: '/doosnashenie' },
                { label: 'ОСАГО', path: '/osago' },
                { label: 'Запчасти', path: '/zapchasti' },
                { label: 'Сигнализация', path: '/signalizatsiya' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-body flex items-center gap-1.5">
                    <Icon name="ChevronRight" size={12} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-white text-sm font-500 tracking-widest uppercase mb-4">Информация</h4>
            <ul className="space-y-2">
              {['О компании', 'Наши гарантии', 'Отзывы клиентов', 'Вакансии', 'Блог'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-body flex items-center gap-1.5">
                    <Icon name="ChevronRight" size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display text-white text-sm font-500 tracking-widest uppercase mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-gray-400 text-sm font-body">
                <Icon name="Phone" size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>8 (800) 123-45-67<br/><span className="text-xs text-gray-500">Бесплатно по России</span></span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm font-body">
                <Icon name="Mail" size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                info@dsservis.ru
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm font-body">
                <Icon name="MapPin" size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>г. Москва,<br/>ул. Автозаводская, 14</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm font-body">
                <Icon name="Clock" size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Пн–Сб: 8:00–20:00<br/>Вс: 9:00–17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-body">
            © 2024 DSSERVIS. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs font-body transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs font-body transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
