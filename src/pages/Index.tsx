import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import PhoneWidget from '@/components/PhoneWidget';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Wrench',
    title: 'Техническое обслуживание',
    desc: 'Замена масла, фильтров, тормозных колодок, диагностика двигателя и ходовой части. Все виды плановых работ.',
    path: '/to',
    price: 'от 1 500 ₽',
  },
  {
    icon: 'Zap',
    title: 'Дооснащение автомобилей',
    desc: 'Установка парктроников, камер, подогревов, аэродинамических обвесов, ксенона и LED-оптики.',
    path: '/doosnashenie',
    price: 'от 4 900 ₽',
  },
  {
    icon: 'FileText',
    title: 'Страхование ОСАГО',
    desc: 'Оформление и расчёт ОСАГО от ведущих страховщиков России. Быстро, выгодно, без очередей.',
    path: '/osago',
    price: 'от 2 400 ₽/год',
  },
  {
    icon: 'Settings',
    title: 'Подбор запчастей',
    desc: 'Поиск оригинальных и аналоговых запчастей по VIN-номеру для любой марки и модели автомобиля.',
    path: '/zapchasti',
    price: 'от 300 ₽',
  },
  {
    icon: 'Shield',
    title: 'Автосигнализации',
    desc: 'Продажа и установка охранных систем Pandora, Starline, Sheriff для всех марок автомобилей.',
    path: '/signalizatsiya',
    price: 'от 8 900 ₽',
  },
];

const stats = [
  { value: '12+', label: 'Лет на рынке' },
  { value: '8 000+', label: 'Довольных клиентов' },
  { value: '50 000+', label: 'Выполненных работ' },
  { value: '24/7', label: 'Поддержка клиентов' },
];

const reviews = [
  { name: 'Александр К.', text: 'Отличный сервис! Заменили масло и колодки быстро, цена честная. Буду приезжать постоянно.', rating: 5 },
  { name: 'Марина В.', text: 'Оформили ОСАГО прямо на месте, нашли лучшую цену среди всех страховщиков. Рекомендую!', rating: 5 },
  { name: 'Дмитрий П.', text: 'Нашли запчасть по VIN за 5 минут. Привезли на следующий день. Профессионалы!', rating: 5 },
];

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <BookingModal forceOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <PhoneWidget />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/29e4ad77-a901-44f5-8dfb-985c6a7fbe81/files/6b101fbe-9fcf-47a7-b95a-105e6fbf6886.jpg)` }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/10 border border-blue-500/20"
              style={{
                width: `${80 + i * 60}px`,
                height: `${80 + i * 60}px`,
                top: `${10 + i * 12}%`,
                right: `${5 + i * 5}%`,
                animation: `pulseGlow ${2 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-display tracking-widest uppercase">Профессиональный автосервис</span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl font-bold text-white leading-none mb-6 animate-slide-up">
              DS<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">SERVIS</span>
            </h1>

            <p className="text-gray-300 text-lg font-body leading-relaxed mb-8 animate-slide-up">
              Полный спектр услуг для вашего автомобиля — от технического обслуживания и дооснащения до страхования ОСАГО и подбора запчастей по VIN.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary-ds px-8 py-4 rounded-xl text-base tracking-widest uppercase flex items-center gap-2"
              >
                <Icon name="Calendar" size={18} />
                Записаться онлайн
              </button>
              <a
                href="tel:+79190072169"
                className="flex items-center gap-2 border border-blue-500/40 text-white hover:border-blue-400 hover:text-blue-400 px-8 py-4 rounded-xl text-sm font-display tracking-wider uppercase transition-all duration-300"
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-body tracking-widest uppercase">Прокрутите вниз</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Services */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-blue-400 text-xs font-display tracking-[0.3em] uppercase mb-3 block">Наши услуги</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white tracking-wide mb-4">
            Всё для вашего автомобиля
          </h2>
          <p className="text-gray-400 font-body max-w-xl mx-auto">
            Профессиональные решения для технического обслуживания, защиты и оснащения вашего авто
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.path}
              className="card-dark service-card rounded-2xl p-6 block group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={service.icon as any} size={22} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-medium text-white tracking-wide mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">{service.desc}</p>
              <div className="flex items-center justify-between">
                <span className="price-badge text-blue-400 text-sm font-display px-3 py-1 rounded-lg">{service.price}</span>
                <Icon name="ArrowRight" size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
          <button
            onClick={() => setModalOpen(true)}
            className="card-dark service-card rounded-2xl p-6 text-left border-blue-500/30 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="CalendarCheck" size={22} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-medium text-white tracking-wide mb-2">Записаться онлайн</h3>
              <p className="text-gray-400 text-sm font-body leading-relaxed mb-4">
                Оставьте заявку прямо сейчас — мы перезвоним в течение 15 минут и подберём удобное время
              </p>
              <span className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-display tracking-wider">
                Оставить заявку <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-400 text-xs font-display tracking-[0.3em] uppercase mb-3 block">Почему DSSERVIS</span>
              <h2 className="font-display text-4xl font-semibold text-white tracking-wide mb-6">
                Ваш автомобиль в надёжных руках
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { icon: 'Award', title: 'Гарантия на все работы', desc: 'Предоставляем гарантию от 6 до 24 месяцев на все виды работ и установленные запчасти' },
                  { icon: 'Clock', title: 'Быстрое обслуживание', desc: 'Большинство работ выполняем в день обращения. Срочный ремонт — за 2–3 часа' },
                  { icon: 'DollarSign', title: 'Честные цены', desc: 'Никаких скрытых доплат. Стоимость согласовывается до начала работ' },
                  { icon: 'Users', title: 'Опытные мастера', desc: 'Наши специалисты — дипломированные механики с опытом от 7 лет' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-800/40 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/29e4ad77-a901-44f5-8dfb-985c6a7fbe81/files/c4b652b0-4d44-42e6-b14f-ea3495b0c2c4.jpg"
                alt="DSSERVIS"
                className="rounded-2xl w-full object-cover h-80 md:h-96"
                style={{ border: '1px solid rgba(30,144,255,0.2)' }}
              />
              <div className="absolute -bottom-4 -left-4 card-dark rounded-xl p-4 border border-blue-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <Icon name="CheckCircle" size={18} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-display font-medium">Лицензированный сервис</div>
                    <div className="text-gray-400 text-xs font-body">Официальная гарантия</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-xs font-display tracking-[0.3em] uppercase mb-3 block">Отзывы</span>
          <h2 className="font-display text-4xl font-semibold text-white tracking-wide">Что говорят клиенты</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="card-dark rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Icon key={j} name="Star" size={14} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm font-body leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                  <span className="text-white text-xs font-display">{review.name[0]}</span>
                </div>
                <span className="text-white text-sm font-display">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto card-dark rounded-3xl p-10 text-center border border-blue-500/30 glow-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-wide mb-4">
              Готовы записаться?
            </h2>
            <p className="text-gray-400 font-body mb-8 max-w-lg mx-auto">
              Оставьте заявку — менеджер перезвонит в течение 15 минут и подберёт удобное время
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary-ds px-8 py-4 rounded-xl text-sm tracking-widest uppercase"
              >
                Записаться онлайн
              </button>
              <a
                href="tel:+79190072169"
                className="flex items-center gap-2 border border-blue-500/40 text-white hover:border-blue-400 px-8 py-4 rounded-xl text-sm font-display tracking-wider uppercase transition-all duration-300"
              >
                <Icon name="Phone" size={16} />
                +7 (919) 007-21-69
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}