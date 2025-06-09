import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-dream-moon sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-dream-purple rounded-full flex items-center justify-center">
            <Icon name="Moon" size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-comfortaa text-dream-purple">
            СонДоставка
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-slate-600 hover:text-dream-purple transition-colors"
          >
            Услуги
          </a>
          <a
            href="#reviews"
            className="text-slate-600 hover:text-dream-purple transition-colors"
          >
            Отзывы
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-dream-purple transition-colors"
          >
            Контакты
          </a>
        </nav>

        <button className="text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors bg-slate-700 font-normal">
          Заказать сон
        </button>
      </div>
    </header>
  );
};

export default Header;
