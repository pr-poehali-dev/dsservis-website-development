import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import PhoneWidget from '@/components/PhoneWidget';
import Icon from '@/components/ui/icon';

const categories = [
  {
    icon: 'Eye',
    title: 'Видеонаблюдение и парковка',
    items: [
      { name: 'Камера заднего вида', price: '4 900 – 8 500 ₽' },
      { name: 'Камера 360° (кругового обзора)', price: '18 000 – 35 000 ₽' },
      { name: 'Парктроник задний (4 датчика)', price: '3 900 – 6 500 ₽' },
      { name: 'Парктроник передний + задний', price: '6 500 – 9 900 ₽' },
    ],
  },
  {
    icon: 'Thermometer',
    title: 'Системы обогрева',
    items: [
      { name: 'Подогрев передних сидений', price: '5 500 – 8 000 ₽' },
      { name: 'Подогрев задних сидений', price: '4 500 – 7 000 ₽' },
      { name: 'Подогрев руля', price: '4 000 – 6 500 ₽' },
      { name: 'Предпусковой подогреватель Webasto', price: '45 000 – 75 000 ₽' },
    ],
  },
  {
    icon: 'Zap',
    title: 'Оптика и освещение',
    items: [
      { name: 'Ксеноновые фары (комплект)', price: '12 000 – 22 000 ₽' },
      { name: 'LED-фары ближнего света', price: '8 500 – 18 000 ₽' },
      { name: 'Диодная подсветка салона', price: '3 500 – 6 000 ₽' },
      { name: 'Ангельские глазки (LED-кольца)', price: '7 000 – 14 000 ₽' },
    ],
  },
  {
    icon: 'Bluetooth',
    title: 'Мультимедиа и связь',
    items: [
      { name: 'Головное устройство Android Auto/CarPlay', price: '18 000 – 45 000 ₽' },
      { name: 'Навигационный блок', price: '12 000 – 28 000 ₽' },
      { name: 'Усилитель + акустика', price: '15 000 – 50 000 ₽' },
      { name: 'Беспроводная зарядка QI', price: '3 500 – 7 000 ₽' },
    ],
  },
  {
    icon: 'Car',
    title: 'Аэродинамика и кузов',
    items: [
      { name: 'Спойлер задний (установка)', price: '4 000 – 8 000 ₽' },
      { name: 'Боковые пороги', price: '6 500 – 15 000 ₽' },
      { name: 'Дефлекторы окон', price: '2 500 – 4 500 ₽' },
      { name: 'Защита картера', price: '5 000 – 9 000 ₽' },
    ],
  },
  {
    icon: 'Wind',
    title: 'Климатические системы',
    items: [
      { name: 'Заправка кондиционера', price: '2 500 – 4 000 ₽' },
      { name: 'Ароматизатор + озонирование', price: '1 800 – 3 500 ₽' },
      { name: 'Тонировка стёкол', price: '5 500 – 12 000 ₽' },
      { name: 'Защитная плёнка на кузов (PPF)', price: '25 000 – 80 000 ₽' },
    ],
  },
];

export default function ServiceDoosnashenie() {
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
            <Icon name="Zap" size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-display tracking-widest uppercase">Дооснащение</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-wide mb-4">
            Дооснащение <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">автомобилей</span>
          </h1>
          <p className="text-gray-400 font-body text-lg max-w-2xl mb-8">
            Профессиональная установка дополнительного оборудования. Улучшаем комфорт, безопасность и внешний вид вашего автомобиля с официальной гарантией.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary-ds px-8 py-4 rounded-xl text-sm tracking-widest uppercase flex items-center gap-2"
            >
              <Icon name="Calendar" size={18} />
              Записаться
            </button>
            <div className="flex items-center gap-3 border border-blue-900/40 rounded-xl px-5 py-3">
              <Icon name="Award" size={18} className="text-blue-400" />
              <span className="text-gray-300 text-sm font-body">Гарантия на установку 12 месяцев</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white text-center mb-12 tracking-wide">Каталог дооснащения и цены</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="card-dark rounded-2xl p-6 service-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center">
                    <Icon name={cat.icon as 'Eye'} size={18} className="text-white" />
                  </div>
                  <h3 className="font-display text-base font-medium text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between py-2 border-b border-blue-900/20 last:border-0">
                      <span className="text-gray-300 text-sm font-body">{item.name}</span>
                      <span className="text-blue-400 text-sm font-display flex-shrink-0 ml-3">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image block */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-96">
            <img
              src="https://cdn.poehali.dev/projects/29e4ad77-a901-44f5-8dfb-985c6a7fbe81/files/6b101fbe-9fcf-47a7-b95a-105e6fbf6886.jpg"
              alt="Дооснащение"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04080f]/90 to-transparent flex items-center">
              <div className="p-10 max-w-lg">
                <h2 className="font-display text-3xl font-semibold text-white mb-4">Индивидуальный подход</h2>
                <p className="text-gray-300 font-body mb-6">Подберём оптимальное оборудование под ваш бюджет и пожелания. Бесплатная консультация перед установкой.</p>
                <button onClick={() => setModalOpen(true)} className="btn-primary-ds px-6 py-3 rounded-xl text-sm tracking-wider uppercase">
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
