import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-dream-cloud to-dream-moon overflow-hidden">
      {/* Floating clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Icon name="Cloud" size={80} className="text-white opacity-60" />
        </div>
        <div
          className="absolute top-32 right-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Icon name="Cloud" size={60} className="text-white opacity-40" />
        </div>
        <div
          className="absolute top-60 left-1/3 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <Icon name="Cloud" size={100} className="text-white opacity-50" />
        </div>
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-1/4 animate-twinkle">
          <Icon name="Star" size={20} className="text-dream-purple" />
        </div>
        <div
          className="absolute top-40 left-1/4 animate-twinkle"
          style={{ animationDelay: "1s" }}
        >
          <Icon name="Star" size={16} className="text-dream-purple" />
        </div>
        <div
          className="absolute top-72 right-1/3 animate-twinkle"
          style={{ animationDelay: "3s" }}
        >
          <Icon name="Star" size={24} className="text-dream-purple" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center bg-transparent rounded-full">
        <h1 className="text-6xl md:text-8xl font-comfortaa text-dream-purple mb-6 leading-tight">
          Доставка
          <br />
          снов
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Мы доставляем самые прекрасные сны прямо к вашей подушке. Качественный
          отдых и волшебные грезы гарантированы!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="text-white px-8 py-4 rounded-full text-lg hover:bg-purple-600 transition-all transform hover:scale-105 bg-slate-400">
            Заказать сладкий сон
          </button>
          <button className="border-2 border-dream-purple text-dream-purple px-8 py-4 rounded-full text-lg hover:bg-dream-purple hover:text-white transition-all bg-slate-400">
            Каталог снов
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 text-center">
            <Icon
              name="Clock"
              size={40}
              className="text-dream-purple mx-auto mb-4"
            />
            <h3 className="font-comfortaa text-lg mb-2 text-slate-400">
              Быстрая доставка
            </h3>
            <p className="text-slate-600">В течение 5 минут после засыпания</p>
          </div>

          <div className="backdrop-blur-sm rounded-3xl p-6 text-center bg-transparent">
            <Icon
              name="Shield"
              size={40}
              className="text-dream-purple mx-auto mb-4"
            />
            <h3 className="font-comfortaa text-lg mb-2 text-slate-400">
              Гарантия качества
            </h3>
            <p className="text-slate-600">Только проверенные сюжеты</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 text-center">
            <Icon
              name="Heart"
              size={40}
              className="text-dream-purple mx-auto mb-4"
            />
            <h3 className="font-comfortaa text-lg mb-2 text-slate-400">
              Индивидуальный подход
            </h3>
            <p className="text-slate-600">Сны по вашим предпочтениям</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
