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
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

        {/* Магические криптовалютные элементы */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-amber-400 animate-float flex items-center justify-center text-white font-bold">₿</div>
          <div className="absolute top-40 right-32 w-12 h-12 rounded-full bg-blue-400 animate-pulse-crypto flex items-center justify-center text-white text-sm">Ξ</div>
          <div className="absolute bottom-32 left-32 w-14 h-14 rounded-full bg-green-400 animate-float flex items-center justify-center text-white font-bold">₮</div>
          <div className="absolute top-1/3 left-1/2 w-10 h-10 rounded-full bg-purple-400 animate-pulse-crypto flex items-center justify-center text-white text-xs">◆</div>
        </div>



        <div className="relative z-10 text-center max-w-6xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
            <span className="text-amber-300 drop-shadow-2xl">Леший приносит</span>
            <br />
            <span className="text-white drop-shadow-2xl">цифровое золото!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto animate-fade-in drop-shadow-lg">
            Мистический лес цифровых валют открывает свои тайны!
            <br />
            Первая в регионе сеть магических автоматов для продажи BTC, USDT и других сокровищ на золотые монеты.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in">
            <h3 className="text-2xl text-amber-200 mb-6 drop-shadow-lg">До пробуждения леса осталось:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Дней', value: countdown.days },
                { label: 'Часов', value: countdown.hours },
                { label: 'Минут', value: countdown.minutes },
                { label: 'Секунд', value: countdown.seconds }
              ].map((item, index) => (
                <Card key={index} className="bg-emerald-900/40 backdrop-blur-lg border-amber-400/30 p-6 shadow-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-amber-300 mb-2 drop-shadow-lg">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-green-200 text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all animate-fade-in shadow-2xl"
            onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Войти в магический лес
            <Icon name="TreePine" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-emerald-900/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-200 mb-16 drop-shadow-lg">
            Дары <span className="text-green-300">лесного духа</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card key={index} className="bg-emerald-900/30 backdrop-blur-lg border-amber-400/30 p-6 hover:bg-emerald-800/40 transition-all hover:scale-105 shadow-xl">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Icon name={feature.icon as any} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-amber-200 mb-3 drop-shadow">{feature.title}</h3>
                <p className="text-green-200">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Узнайте о запуске <span className="crypto-text-gradient">первыми!</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Оставьте свои контакты и получите уведомление, когда заработает первый криптомат
          </p>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubscribe} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Ваш телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="crypto-gradient text-white font-semibold w-full h-12 hover:scale-105 transition-transform"
              >
                Подписаться на уведомления
                <Icon name="Bell" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Часто задаваемые <span className="crypto-text-gradient">вопросы</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
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
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 backdrop-blur-lg border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-crypto-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-white border-t border-gray-200">
        {/* Logo в левом нижнем углу */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <img 
            src="https://cdn.poehali.dev/files/5fed840c-25ac-4760-a0cf-7757662357af.png" 
            alt="CryptoLes" 
            className="absolute bottom-0 left-0 h-full w-auto"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://t.me/cryptoatm_channel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-crypto-orange transition-colors flex items-center"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram канал
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-crypto-blue transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>

          <p className="text-gray-500">© CryptoLes, 2025. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;