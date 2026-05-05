import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import PhoneWidget from '@/components/PhoneWidget';
import Icon from '@/components/ui/icon';

const carBrands = [
  'Audi', 'BMW', 'Chery', 'Chevrolet', 'Citroën', 'Daewoo', 'Fiat', 'Ford',
  'Geely', 'Haval', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia',
  'Lada (ВАЗ)', 'Land Rover', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Mitsubishi',
  'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Skoda', 'Subaru',
  'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'УАЗ', 'ГАЗ',
];

const alarmSystems = [
  {
    brand: 'Starline',
    model: 'A93 GSM',
    price: '12 500 ₽',
    priceInstall: '+ установка 3 500 ₽',
    features: ['2-сторонняя связь', 'GSM-модуль', 'Автозапуск', 'Мобильное приложение'],
    highlight: false,
    level: 'Оптимальный',
  },
  {
    brand: 'Pandora',
    model: 'DX 91 LoRa',
    price: '21 900 ₽',
    priceInstall: '+ установка 4 500 ₽',
    features: ['LoRa технология', 'GPS/ГЛОНАСС', 'Иммобилайзер', 'CAN-шина', 'Умный телефон'],
    highlight: true,
    level: 'Премиум',
  },
  {
    brand: 'Sheriff',
    model: 'ZX-1090',
    price: '8 900 ₽',
    priceInstall: '+ установка 3 000 ₽',
    features: ['2-сторонняя связь', 'Датчик удара', 'Реле блокировки', 'Турботаймер'],
    highlight: false,
    level: 'Базовый',
  },
  {
    brand: 'Pandora',
    model: 'DXL 5000 NEW',
    price: '38 000 ₽',
    priceInstall: '+ установка 6 000 ₽',
    features: ['GPS/GSM/LoRa', 'Видеокамера', 'Голосовое управление', 'Биометрия', 'Слежение онлайн'],
    highlight: false,
    level: 'Топовый',
  },
  {
    brand: 'Starline',
    model: 'E96 BT GPS',
    price: '18 500 ₽',
    priceInstall: '+ установка 4 000 ₽',
    features: ['Bluetooth 5.0', 'GPS-трекер', 'Автозапуск', 'Биометрический брелок'],
    highlight: false,
    level: 'Продвинутый',
  },
  {
    brand: 'Scher-Khan',
    model: 'Magicar 7',
    price: '6 500 ₽',
    priceInstall: '+ установка 2 500 ₽',
    features: ['1-сторонняя связь', 'Датчик объёма', 'Турботаймер', 'Противоугонный режим'],
    highlight: false,
    level: 'Начальный',
  },
];

export default function ServiceSignalizatsiya() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [showBrandList, setShowBrandList] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlarm, setSelectedAlarm] = useState<string | null>(null);

  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <BookingModal forceOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <PhoneWidget />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
            <Icon name="Shield" size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-display tracking-widest uppercase">Безопасность</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-wide mb-4">
            Автосигнализации <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">и защита</span>
          </h1>
          <p className="text-gray-400 font-body text-lg max-w-2xl mb-8">
            Подбор и профессиональная установка охранных систем Pandora, Starline, Sheriff для любой марки автомобиля. Гарантия 12 месяцев.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary-ds px-8 py-4 rounded-xl text-sm tracking-widest uppercase flex items-center gap-2"
            >
              <Icon name="Shield" size={18} />
              Выбрать сигнализацию
            </button>
          </div>
        </div>
      </section>

      {/* Car Brand Selector */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark rounded-2xl p-6 border border-blue-500/20">
            <h2 className="font-display text-xl font-semibold text-white mb-2">
              Подбор по марке автомобиля
            </h2>
            <p className="text-gray-400 text-sm font-body mb-5">
              Выберите марку — и мы покажем совместимые охранные системы с учётом CAN-шины вашего автомобиля
            </p>

            {/* Selected */}
            {selectedBrand && (
              <div className="flex items-center gap-2 mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <Icon name="Car" size={16} className="text-blue-400" />
                <span className="text-white text-sm font-display">Выбрано: {selectedBrand}</span>
                <button onClick={() => setSelectedBrand('')} className="ml-auto text-gray-500 hover:text-white">
                  <Icon name="X" size={14} />
                </button>
              </div>
            )}

            {/* Toggle list */}
            <button
              onClick={() => setShowBrandList(!showBrandList)}
              className="w-full flex items-center justify-between px-4 py-3 bg-blue-950/30 border border-blue-800/40 rounded-xl text-sm font-body text-gray-300 hover:border-blue-500 transition-colors mb-3"
            >
              <span>{selectedBrand || 'Нажмите для выбора марки...'}</span>
              <Icon name={showBrandList ? 'ChevronUp' : 'ChevronDown'} size={16} className="text-blue-400" />
            </button>

            {showBrandList && (
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2 max-h-56 overflow-y-auto animate-fade-in">
                {carBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => {
                      setSelectedBrand(brand);
                      setShowBrandList(false);
                    }}
                    className={`px-2 py-2 rounded-lg text-xs font-body transition-all duration-200 text-center ${
                      selectedBrand === brand
                        ? 'bg-blue-600 text-white border border-blue-500'
                        : 'bg-blue-950/30 border border-blue-800/30 text-gray-400 hover:border-blue-600 hover:text-white'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}

            {selectedBrand && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl animate-fade-in">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="CheckCircle" size={15} className="text-green-400" />
                  <span className="text-green-400 text-sm font-display">Для {selectedBrand} доступны все системы ниже</span>
                </div>
                <p className="text-gray-400 text-xs font-body">
                  Наши мастера учитывают особенности CAN-шины и электрики вашего автомобиля
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Alarm Systems */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white text-center mb-3 tracking-wide">
            Каталог охранных систем
          </h2>
          <p className="text-gray-400 text-center font-body mb-10">
            Цены указаны с учётом стоимости оборудования. Установка оплачивается отдельно.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alarmSystems.map((alarm, i) => (
              <div
                key={i}
                className={`card-dark service-card rounded-2xl p-6 relative overflow-hidden cursor-pointer ${
                  alarm.highlight ? 'border-blue-500/50 glow-blue' : ''
                } ${selectedAlarm === alarm.model ? 'border-blue-400/70' : ''}`}
                onClick={() => setSelectedAlarm(alarm.model === selectedAlarm ? null : alarm.model)}
              >
                {alarm.highlight && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-display px-2 py-0.5 rounded-full">
                    Хит продаж
                  </div>
                )}
                <div className="mb-1">
                  <span className="text-blue-400 text-xs font-display tracking-widest uppercase">{alarm.level}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{alarm.brand}</h3>
                <p className="text-gray-400 text-sm font-body mb-4">{alarm.model}</p>

                <div className="flex flex-col gap-2 mb-5">
                  {alarm.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-gray-300 text-sm font-body">
                      <Icon name="Check" size={13} className="text-blue-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="border-t border-blue-900/30 pt-4">
                  <div className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    {alarm.price}
                  </div>
                  <div className="text-gray-500 text-xs font-body mb-4">{alarm.priceInstall}</div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                    className={`w-full py-2.5 rounded-xl text-sm font-display tracking-wider uppercase transition-all duration-300 ${
                      alarm.highlight
                        ? 'btn-primary-ds'
                        : 'border border-blue-500/40 text-blue-400 hover:bg-blue-500/10'
                    }`}
                  >
                    Заказать установку
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white text-center mb-10">Как проходит установка</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', icon: 'Phone', title: 'Звонок / заявка', desc: 'Консультируем и подбираем систему под ваш автомобиль' },
              { step: '02', icon: 'Calendar', title: 'Запись', desc: 'Выбираете удобное время — работаем 7 дней в неделю' },
              { step: '03', icon: 'Wrench', title: 'Установка', desc: 'Профессиональная установка за 3–5 часов' },
              { step: '04', icon: 'CheckCircle', title: 'Гарантия', desc: 'Обучаем пользованию и выдаём гарантию 12 месяцев' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="relative w-14 h-14 mx-auto mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-900/30 border border-blue-800/40 flex items-center justify-center">
                    <Icon name={step.icon as 'Phone'} size={22} className="text-blue-400" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-display flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-white font-medium mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + CTA */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-80">
            <img
              src="https://cdn.poehali.dev/projects/29e4ad77-a901-44f5-8dfb-985c6a7fbe81/files/62fec2b1-a5c6-47fa-a571-ab9b177d61bf.jpg"
              alt="Автосигнализация"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04080f]/90 to-transparent flex items-center">
              <div className="p-10 max-w-lg">
                <h2 className="font-display text-3xl font-semibold text-white mb-4">Защитите свой автомобиль</h2>
                <p className="text-gray-300 font-body mb-6">Угоняют каждые 5 минут. Надёжная сигнализация — лучшая страховка.</p>
                <button onClick={() => setModalOpen(true)} className="btn-primary-ds px-6 py-3 rounded-xl text-sm tracking-wider uppercase">
                  Записаться на установку
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
