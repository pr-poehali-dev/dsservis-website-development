import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import PhoneWidget from '@/components/PhoneWidget';
import Icon from '@/components/ui/icon';

const insurers = [
  { name: 'Росгосстрах', rating: 4.8, discount: 'до 15%' },
  { name: 'СОГАЗ', rating: 4.7, discount: 'до 12%' },
  { name: 'Ингосстрах', rating: 4.9, discount: 'до 18%' },
  { name: 'Альфастрахование', rating: 4.6, discount: 'до 10%' },
  { name: 'Ренессанс Страхование', rating: 4.5, discount: 'до 14%' },
  { name: 'РЕСО-Гарантия', rating: 4.7, discount: 'до 16%' },
];

const faq = [
  { q: 'Какие документы нужны для оформления ОСАГО?', a: 'Паспорт, водительское удостоверение, СТС (свидетельство о регистрации ТС) и диагностическая карта (для автомобилей старше 4 лет).' },
  { q: 'Сколько стоит ОСАГО в 2024 году?', a: 'Стоимость зависит от мощности двигателя, региона, стажа водителя и КБМ. Минимум — от 2 400 ₽/год для легковых автомобилей до 50 л.с.' },
  { q: 'Можно ли оформить ОСАГО без диагностической карты?', a: 'Да, для автомобилей до 4 лет диагностическая карта не требуется. Для остальных — обязательна.' },
  { q: 'Что делать при ДТП?', a: 'Зафиксируйте место ДТП, вызовите ГИБДД или оформите Европротокол (при ущербе до 100 000 ₽). Уведомите страховщика в течение 5 рабочих дней.' },
];

export default function ServiceOsago() {
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <BookingModal forceOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <PhoneWidget />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
            <Icon name="FileText" size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-display tracking-widest uppercase">Страхование</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-wide mb-4">
            Страхование <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ОСАГО</span>
          </h1>
          <p className="text-gray-400 font-body text-lg max-w-2xl mb-8">
            Оформляем ОСАГО от ведущих страховщиков России. Сравниваем цены и находим лучшее предложение — без очередей и за 15 минут.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary-ds px-8 py-4 rounded-xl text-sm tracking-widest uppercase flex items-center gap-2"
            >
              <Icon name="Calculator" size={18} />
              Рассчитать ОСАГО
            </button>
            <div className="flex items-center gap-3 border border-blue-900/40 rounded-xl px-5 py-3">
              <Icon name="Clock" size={18} className="text-blue-400" />
              <span className="text-gray-300 text-sm font-body">Оформление за 15 минут</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: 'TrendingDown', title: 'Лучшая цена', desc: 'Сравниваем 20+ страховщиков' },
            { icon: 'Clock', title: '15 минут', desc: 'Быстрое оформление' },
            { icon: 'Shield', title: 'Официально', desc: 'Только лицензированные СК' },
            { icon: 'Headphones', title: 'Поддержка', desc: 'Помощь при ДТП 24/7' },
          ].map((item, i) => (
            <div key={i} className="card-dark rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-800/40 flex items-center justify-center mx-auto mb-3">
                <Icon name={item.icon as 'Shield'} size={18} className="text-blue-400" />
              </div>
              <h3 className="font-display text-white font-medium mb-1">{item.title}</h3>
              <p className="text-gray-400 text-xs font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insurers */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white text-center mb-10 tracking-wide">Наши партнёры — страховые компании</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {insurers.map((ins, i) => (
              <div key={i} className="card-dark rounded-2xl p-5 flex items-center justify-between service-card">
                <div>
                  <h3 className="font-display text-white font-medium mb-1">{ins.name}</h3>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={12} className="text-yellow-400" />
                    <span className="text-gray-400 text-xs font-body">{ins.rating}</span>
                  </div>
                </div>
                <span className="price-badge text-blue-400 text-sm font-display px-3 py-1 rounded-lg">{ins.discount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto card-dark rounded-2xl p-8">
          <h2 className="font-display text-2xl font-semibold text-white mb-6">Примерная стоимость ОСАГО 2024</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-blue-900/40">
                  <th className="text-left text-gray-400 pb-3 pr-4">Мощность авто</th>
                  <th className="text-left text-gray-400 pb-3 pr-4">Стаж 1 год</th>
                  <th className="text-left text-gray-400 pb-3 pr-4">Стаж 3–5 лет</th>
                  <th className="text-left text-gray-400 pb-3">Стаж 10+ лет</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['до 50 л.с.', '4 500 ₽', '3 100 ₽', '2 400 ₽'],
                  ['50–70 л.с.', '7 800 ₽', '5 200 ₽', '3 900 ₽'],
                  ['70–100 л.с.', '11 200 ₽', '7 500 ₽', '5 600 ₽'],
                  ['100–150 л.с.', '14 500 ₽', '9 700 ₽', '7 200 ₽'],
                  ['свыше 150 л.с.', '18 000 ₽', '12 000 ₽', '9 000 ₽'],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-blue-900/20 ${i % 2 === 0 ? 'bg-blue-950/10' : ''}`}>
                    <td className="py-3 pr-4 text-gray-200">{row[0]}</td>
                    <td className="py-3 pr-4 text-blue-400 font-display">{row[1]}</td>
                    <td className="py-3 pr-4 text-blue-400 font-display">{row[2]}</td>
                    <td className="py-3 text-blue-400 font-display">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-4 font-body">* Цены ориентировочные для г. Москва, легковые авто категории B. Точная стоимость рассчитывается индивидуально.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white text-center mb-10 tracking-wide">Часто задаваемые вопросы</h2>
          <div className="flex flex-col gap-3">
            {faq.map((item, i) => (
              <div key={i} className="card-dark rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span className="font-display text-white font-medium text-sm">{item.q}</span>
                  <Icon name={expanded === i ? 'ChevronUp' : 'ChevronDown'} size={16} className="text-blue-400 flex-shrink-0 ml-3" />
                </button>
                {expanded === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 text-sm font-body">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto card-dark rounded-3xl p-10 text-center border border-blue-500/30 glow-blue">
          <h2 className="font-display text-3xl font-semibold text-white mb-4">Оформить ОСАГО прямо сейчас</h2>
          <p className="text-gray-400 font-body mb-8">Наш специалист рассчитает стоимость и оформит полис в течение 15 минут</p>
          <button onClick={() => setModalOpen(true)} className="btn-primary-ds px-10 py-4 rounded-xl text-sm tracking-widest uppercase">
            Рассчитать стоимость
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
