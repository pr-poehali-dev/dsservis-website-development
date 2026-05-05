import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import PhoneWidget from '@/components/PhoneWidget';
import Icon from '@/components/ui/icon';

const services = [
  { name: 'Замена моторного масла + фильтр', price: '1 500 – 2 500 ₽', time: '30 мин' },
  { name: 'Замена тормозных колодок (ось)', price: '2 000 – 3 500 ₽', time: '1 час' },
  { name: 'Замена воздушного фильтра', price: '500 – 800 ₽', time: '15 мин' },
  { name: 'Замена свечей зажигания (4 шт.)', price: '1 200 – 2 200 ₽', time: '45 мин' },
  { name: 'Компьютерная диагностика', price: '900 – 1 500 ₽', time: '30 мин' },
  { name: 'Замена ремня ГРМ', price: '4 500 – 8 000 ₽', time: '3 часа' },
  { name: 'Замена охлаждающей жидкости', price: '1 200 – 1 800 ₽', time: '40 мин' },
  { name: 'Регулировка клапанов', price: '3 000 – 5 500 ₽', time: '2 часа' },
  { name: 'Замена топливного фильтра', price: '700 – 1 200 ₽', time: '30 мин' },
  { name: 'Промывка инжекторов', price: '2 500 – 4 000 ₽', time: '1.5 часа' },
  { name: 'Замена тормозной жидкости', price: '1 000 – 1 600 ₽', time: '45 мин' },
  { name: 'ТО-1 (первые 10 000 км)', price: '3 500 – 5 000 ₽', time: '1.5 часа' },
];

const packages = [
  {
    name: 'ТО Базовое',
    price: '3 500 ₽',
    features: ['Замена масла и фильтра', 'Проверка тормозной системы', 'Диагностика ходовой', 'Проверка уровней жидкостей', 'Визуальный осмотр'],
    highlight: false,
  },
  {
    name: 'ТО Стандарт',
    price: '6 900 ₽',
    features: ['Всё из Базового', 'Замена воздушного фильтра', 'Замена свечей зажигания', 'Проверка аккумулятора', 'Регулировка света фар', 'Компьютерная диагностика'],
    highlight: true,
  },
  {
    name: 'ТО Полное',
    price: '12 500 ₽',
    features: ['Всё из Стандарт', 'Замена ремня ГРМ', 'Промывка инжекторов', 'Регулировка клапанов', 'Замена тормозной жидкости', 'Проверка кондиционера', 'Балансировка колёс'],
    highlight: false,
  },
];

export default function ServiceTO() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <BookingModal forceOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <PhoneWidget />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
            <Icon name="Wrench" size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-display tracking-widest uppercase">Техническое обслуживание</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-wide mb-4">
            Техническое <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">обслуживание</span>
          </h1>
          <p className="text-gray-400 font-body text-lg max-w-2xl mb-8">
            Профессиональный сервис для поддержания вашего автомобиля в идеальном техническом состоянии. Работаем со всеми марками и моделями.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-primary-ds px-8 py-4 rounded-xl text-sm tracking-widest uppercase flex items-center gap-2 inline-flex"
          >
            <Icon name="Calendar" size={18} />
            Записаться на ТО
          </button>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-white tracking-wide mb-3">Пакеты технического обслуживания</h2>
            <p className="text-gray-400 font-body">Выберите подходящий пакет или закажите отдельные услуги</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`card-dark rounded-2xl p-6 relative overflow-hidden ${pkg.highlight ? 'border-blue-500/50 glow-blue' : ''}`}
              >
                {pkg.highlight && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-display px-2 py-0.5 rounded-full tracking-wider">
                    Популярный
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold text-white mb-1">{pkg.name}</h3>
                <div className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-5">
                  {pkg.price}
                </div>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm font-body">
                      <Icon name="Check" size={14} className="text-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
                  className={`w-full py-3 rounded-xl text-sm font-display tracking-widest uppercase transition-all duration-300 ${
                    pkg.highlight
                      ? 'btn-primary-ds'
                      : 'border border-blue-500/40 text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white tracking-wide mb-8 text-center">Прейскурант отдельных работ</h2>
          <div className="card-dark rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 gap-2 ${
                  i !== services.length - 1 ? 'border-b border-blue-900/30' : ''
                } hover:bg-blue-900/10 transition-colors`}
              >
                <span className="text-gray-200 font-body text-sm">{service.name}</span>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-gray-500 text-xs font-body flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {service.time}
                  </span>
                  <span className="text-blue-400 font-display font-medium text-sm">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto card-dark rounded-3xl p-10 text-center border border-blue-500/30 glow-blue">
          <h2 className="font-display text-3xl font-semibold text-white mb-4">Записаться на техобслуживание</h2>
          <p className="text-gray-400 font-body mb-8">Мастер-приёмщик подберёт оптимальный пакет работ и стоимость</p>
          <button onClick={() => setModalOpen(true)} className="btn-primary-ds px-10 py-4 rounded-xl text-sm tracking-widest uppercase">
            Записаться онлайн
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
