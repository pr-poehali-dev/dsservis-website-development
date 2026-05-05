import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import PhoneWidget from '@/components/PhoneWidget';
import Icon from '@/components/ui/icon';

const carBrands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Honda', 'Hyundai', 'Kia',
  'Lada (ВАЗ)', 'Chevrolet', 'Ford', 'Renault', 'Nissan', 'Mazda', 'Mitsubishi',
  'Subaru', 'Volvo', 'Skoda', 'Peugeot', 'Citroën', 'Opel', 'Jeep', 'Lexus',
  'Infiniti', 'Acura', 'Land Rover', 'Jaguar', 'Porsche', 'Haval', 'Chery',
];

const partCategories = [
  { name: 'Двигатель и навесное', icon: 'Settings' },
  { name: 'Тормозная система', icon: 'CircleDot' },
  { name: 'Подвеска и рулевое', icon: 'RotateCcw' },
  { name: 'Трансмиссия', icon: 'Cog' },
  { name: 'Кузов и оптика', icon: 'Car' },
  { name: 'Электрика и датчики', icon: 'Zap' },
  { name: 'Фильтры и масла', icon: 'Droplets' },
  { name: 'Система охлаждения', icon: 'Thermometer' },
];

const popular = [
  { name: 'Тормозные колодки передние', brands: 'Toyota, Hyundai, Kia', price: 'от 800 ₽', delivery: '1 день' },
  { name: 'Масляный фильтр', brands: 'Все марки', price: 'от 120 ₽', delivery: 'Сегодня' },
  { name: 'Амортизатор передний', brands: 'BMW, Audi, VW', price: 'от 3 500 ₽', delivery: '2–3 дня' },
  { name: 'Ремень ГРМ (комплект)', brands: 'Renault, Peugeot', price: 'от 2 100 ₽', delivery: '1 день' },
  { name: 'Катализатор', brands: 'Mercedes, BMW', price: 'от 12 000 ₽', delivery: '3–5 дней' },
  { name: 'Стойка стабилизатора', brands: 'Все марки', price: 'от 350 ₽', delivery: '1 день' },
];

export default function ServiceZapchasti() {
  const [vin, setVin] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPart, setSelectedPart] = useState('');
  const [searched, setSearched] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (vin.trim().length > 0 || selectedBrand) {
      setSearched(true);
    }
  };

  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <BookingModal forceOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <PhoneWidget />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
            <Icon name="Search" size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-display tracking-widest uppercase">Подбор запчастей</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white tracking-wide mb-4">
            Подбор <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">запчастей</span>
          </h1>
          <p className="text-gray-400 font-body text-lg max-w-2xl mb-8">
            Единая система поиска оригинальных и аналоговых запчастей по VIN-номеру для любой марки. Доставка от 1 дня.
          </p>
        </div>
      </section>

      {/* VIN Search Block */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark rounded-3xl p-8 border border-blue-500/30 glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <Icon name="Search" size={22} className="text-white" />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-white">Поиск запчастей</h2>
                <p className="text-gray-400 text-sm font-body">По VIN-номеру или марке/модели автомобиля</p>
              </div>
            </div>

            <form onSubmit={handleSearch} className="flex flex-col gap-4">
              {/* VIN Input */}
              <div className="relative">
                <Icon name="Hash" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
                <input
                  type="text"
                  placeholder="VIN-номер (17 символов) — например: XTA210920J0000001"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  maxLength={17}
                  className="w-full bg-blue-950/30 border border-blue-800/40 rounded-xl pl-10 pr-4 py-4 text-white placeholder-gray-500 text-sm font-body focus:outline-none focus:border-blue-500 transition-colors tracking-widest"
                />
                {vin.length > 0 && (
                  <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-body ${vin.length === 17 ? 'text-green-400' : 'text-gray-500'}`}>
                    {vin.length}/17
                  </span>
                )}
              </div>

              <div className="text-center text-gray-500 text-xs font-body uppercase tracking-widest">— или выберите марку —</div>

              {/* Brand Selector */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 max-h-48 overflow-y-auto pr-1">
                {carBrands.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setSelectedBrand(brand === selectedBrand ? '' : brand)}
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

              {/* Part Category */}
              <div className="relative">
                <Icon name="Settings" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 z-10" />
                <select
                  value={selectedPart}
                  onChange={(e) => setSelectedPart(e.target.value)}
                  className="w-full bg-blue-950/30 border border-blue-800/40 rounded-xl pl-10 pr-4 py-4 text-sm font-body focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer text-gray-300"
                  style={{ background: 'rgba(10, 20, 50, 0.6)' }}
                >
                  <option value="">Категория запчасти (необязательно)</option>
                  {partCategories.map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary-ds w-full py-4 rounded-xl text-sm tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Icon name="Search" size={18} />
                Найти запчасти
              </button>
            </form>

            {searched && (
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="CheckCircle" size={16} className="text-green-400" />
                  <span className="text-white text-sm font-display">Запрос принят!</span>
                </div>
                <p className="text-gray-400 text-sm font-body">
                  Наш специалист подберёт запчасти {selectedBrand && `для ${selectedBrand}`} {vin && `по VIN: ${vin}`} и свяжется с вами в течение 30 минут.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-3 text-blue-400 text-sm font-display hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  Оставить контакт для связи <Icon name="ArrowRight" size={13} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Part Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white text-center mb-10 tracking-wide">Категории запчастей</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partCategories.map((cat, i) => (
              <div key={i} className="card-dark service-card rounded-2xl p-5 text-center cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center mx-auto mb-3">
                  <Icon name={cat.icon as 'Settings'} size={20} className="text-white" />
                </div>
                <h3 className="font-display text-white text-sm font-medium">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Parts */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-white text-center mb-10 tracking-wide">Популярные запчасти</h2>
          <div className="card-dark rounded-2xl overflow-hidden">
            {popular.map((part, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 gap-2 hover:bg-blue-900/10 transition-colors ${
                  i !== popular.length - 1 ? 'border-b border-blue-900/30' : ''
                }`}
              >
                <div>
                  <div className="text-gray-200 font-body text-sm">{part.name}</div>
                  <div className="text-gray-500 text-xs font-body mt-0.5">{part.brands}</div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="flex items-center gap-1 text-gray-500 text-xs font-body">
                    <Icon name="Truck" size={12} />
                    {part.delivery}
                  </div>
                  <span className="text-blue-400 font-display font-medium text-sm">{part.price}</span>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-xs border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 px-3 py-1.5 rounded-lg font-display transition-colors"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
