import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Создание падающих листьев
  useEffect(() => {
    const leavesContainer = document.querySelector('.falling-leaves');
    if (!leavesContainer) return;

    const createLeaf = () => {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      leaf.style.left = Math.random() * 100 + '%';
      leaf.style.animationDuration = (Math.random() * 3 + 8) + 's';
      leaf.style.animationDelay = Math.random() * 2 + 's';
      leavesContainer.appendChild(leaf);

      // Удаление листа после анимации
      setTimeout(() => {
        if (leaf.parentNode) {
          leaf.parentNode.removeChild(leaf);
        }
      }, 12000);
    };

    // Создание листьев каждые 2 секунды
    const leafInterval = setInterval(createLeaf, 2000);
    
    return () => {
      clearInterval(leafInterval);
    };
  }, []);

  // Звуки леса
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    const audio = document.getElementById('forest-audio') as HTMLAudioElement;
    if (audio) {
      if (!soundEnabled) {
        audio.play().catch(() => {});
        audio.loop = true;
        audio.volume = 0.3;
      } else {
        audio.pause();
      }
    }
  };

  useEffect(() => {
    // Countdown до нового года 2026 (Екатеринбург время UTC+5)
    const targetDate = new Date('2026-01-01T00:00:00+05:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Subscribe:', { email, phone });
    alert('Спасибо! Мы уведомим вас о запуске!');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 relative overflow-hidden">
      {/* Звуки леса */}
      <audio id="forest-audio" className="forest-sounds">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhCjyA0fPVdSEGK4TO9MBOEwpL" type="audio/wav" />
      </audio>

      {/* Падающие листья */}
      <div className="falling-leaves"></div>

      {/* Кнопка звука */}
      <button 
        onClick={toggleSound}
        className="fixed top-4 right-4 z-50 bg-emerald-700/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-emerald-600/80 transition-all"
        title={soundEnabled ? 'Выключить звуки леса' : 'Включить звуки леса'}
      >
        <Icon name={soundEnabled ? 'VolumeX' : 'Volume2'} size={18} className="sm:w-5 sm:h-5" />
      </button>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">

        {/* Магические криптовалютные элементы */}
        <div className="absolute inset-0 opacity-30 hidden sm:block">
          <div className="absolute top-20 left-4 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-amber-400 animate-float flex items-center justify-center text-white font-bold text-sm sm:text-base">₿</div>
          <div className="absolute top-40 right-4 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-400 animate-pulse-crypto flex items-center justify-center text-white text-xs sm:text-sm">Ξ</div>
          <div className="absolute bottom-32 left-4 sm:left-32 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-400 animate-float flex items-center justify-center text-white font-bold text-sm">₮</div>
          <div className="absolute top-1/3 left-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-400 animate-pulse-crypto flex items-center justify-center text-white text-xs">◆</div>
        </div>



        <div className="relative z-10 text-center max-w-6xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg px-4">
            <span className="text-amber-300 drop-shadow-2xl">Леший приносит</span>
            <br />
            <span className="text-white drop-shadow-2xl">цифровое золото!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-green-100 mb-8 sm:mb-12 max-w-4xl mx-auto animate-fade-in drop-shadow-lg px-4 leading-relaxed">
            Мистический лес цифровых валют открывает свои тайны!
            <br className="hidden sm:block" />
            <span className="block sm:inline">Первая в регионе сеть магических автоматов для продажи BTC, USDT и других сокровищ на золотые монеты.</span>
          </p>

          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in">
            <h3 className="text-lg sm:text-xl md:text-2xl text-amber-200 mb-4 sm:mb-6 drop-shadow-lg px-4">До пробуждения леса осталось:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto px-4">
              {[
                { label: 'Дней', value: countdown.days },
                { label: 'Часов', value: countdown.hours },
                { label: 'Минут', value: countdown.minutes },
                { label: 'Секунд', value: countdown.seconds }
              ].map((item, index) => (
                <Card key={index} className="bg-emerald-900/40 backdrop-blur-lg border-amber-400/30 p-3 sm:p-4 md:p-6 shadow-2xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 mb-1 sm:mb-2 drop-shadow-lg">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-green-200 text-xs sm:text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-all animate-fade-in shadow-2xl mx-4"
            onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Войти в магический лес
            <Icon name="TreePine" className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-emerald-900/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-amber-200 mb-8 sm:mb-12 lg:mb-16 drop-shadow-lg px-4">
            Дары <span className="text-green-300">лесного духа</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: 'TreePine',
                title: 'Тайные тропы',
                description: 'Криптоматы спрятаны по всему городу — найдите ближайший портал'
              },
              {
                icon: 'Sparkles',
                title: 'Магия мгновения',
                description: 'Продажа криптовалют происходит быстрее лесного ветра'
              },
              {
                icon: 'Eye',
                title: 'Невидимая продажа',
                description: 'Лешиий не расскажет ваши секреты до 100 тысяч золотых'
              },
              {
                icon: 'Gem',
                title: 'Сокровища леса',
                description: 'BTC, ETH, USDT и другие цифровые самоцветы'
              },
              {
                icon: 'Wand2',
                title: 'Простая магия',
                description: 'Даже лесные духи поймут этот интерфейс'
              },
              {
                icon: 'Moon',
                title: 'Ночная стража',
                description: 'Лешиий не спит — работает при луне и солнце'
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-emerald-900/30 backdrop-blur-lg border-amber-400/30 p-4 sm:p-6 hover:bg-emerald-800/40 transition-all hover:scale-105 shadow-xl">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <Icon name={feature.icon as any} className="text-white" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-2 sm:mb-3 drop-shadow">{feature.title}</h3>
                <p className="text-sm sm:text-base text-green-200 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Подпишитесь на <span className="crypto-text-gradient">Telegram-канал!</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 px-4 leading-relaxed">
            «Криптоматы: всё о Bitcoin-банкоматах» — узнавайте первыми о запуске и новостях
          </p>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Icon name="MessageCircle" className="text-white" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 px-2">Криптоматы: всё о Bitcoin-банкоматах</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 px-2 leading-relaxed">
                Новости индустрии, обзоры оборудования, локации криптоматов и эксклюзивная информация о запуске
              </p>
              <Button 
                size="lg" 
                className="crypto-gradient text-white font-semibold w-full h-10 sm:h-12 hover:scale-105 transition-transform text-sm sm:text-base"
                onClick={() => window.open('https://t.me/cryptoatm_channel', '_blank')}
              >
                Подписаться на канал
                <Icon name="ExternalLink" className="ml-2" size={18} />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16 px-4">
            Часто задаваемые <span className="crypto-text-gradient">вопросы</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {[
              {
                question: 'Где будут установлены криптоматы?',
                answer: 'Криптоматы будут размещены в торговых центрах, на вокзалах, в бизнес-центрах и других людных местах города. Точные адреса будут объявлены ближе к запуску.'
              },
              {
                question: 'Какие криптовалюты будут поддерживаться?',
                answer: 'Планируется поддержка основных криптовалют: Bitcoin (BTC), Ethereum (ETH), Tether (USDT), а также других популярных токенов. Список будет расширяться.'
              },
              {
                question: 'Нужна ли верификация?',
                answer: 'Для покупки криптовалют верификация не требуется при сумме до 100 тысяч рублей. При продаже криптовалют обязательна верификация личности согласно требованиям законодательства.'
              },
              {
                question: 'Есть ли комиссия?',
                answer: 'Да, комиссия составляет конкурентные 3-5% в зависимости от объема операции. Точные тарифы будут опубликованы при запуске.'
              },
              {
                question: 'Как будет работать процесс продажи?',
                answer: 'Просто: выберите криптовалюту, укажите сумму, внесите наличные или отсканируйте QR-код кошелька. Вся операция займет 2-3 минуты.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 backdrop-blur-lg border-white/20 rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-white hover:text-crypto-orange text-sm sm:text-base text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        {/* Logo в левом нижнем углу - скрыт на мобильных */}
        <div className="absolute bottom-0 left-0 w-full h-full hidden sm:block">
          <img 
            src="https://cdn.poehali.dev/files/5fed840c-25ac-4760-a0cf-7757662357af.png" 
            alt="CryptoLes" 
            className="absolute bottom-0 left-0 h-full w-auto opacity-80"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8">
            <a 
              href="https://t.me/cryptoatm_channel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-crypto-orange transition-colors flex items-center text-sm sm:text-base"
            >
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Telegram канал
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-crypto-blue transition-colors text-sm sm:text-base"
            >
              Политика конфиденциальности
            </a>
          </div>

          <p className="text-gray-500 text-sm sm:text-base">© CryptoLes, 2025. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;