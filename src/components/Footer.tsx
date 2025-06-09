import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-dream-purple rounded-full flex items-center justify-center">
                <Icon name="Moon" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-comfortaa text-white">СонДоставка</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Мы делаем ваши ночи волшебными, доставляя качественные сны прямо в
              ваши грезы.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={24}
                className="text-slate-400 hover:text-dream-purple cursor-pointer transition-colors"
              />
              <Icon
                name="Facebook"
                size={24}
                className="text-slate-400 hover:text-dream-purple cursor-pointer transition-colors"
              />
              <Icon
                name="Twitter"
                size={24}
                className="text-slate-400 hover:text-dream-purple cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h4 className="font-comfortaa text-lg mb-6">Услуги</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  Волшебные сны
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  Тропические грезы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  Горные пейзажи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  Космические путешествия
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-comfortaa text-lg mb-6">Поддержка</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  Как заказать
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  Оплата
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  Гарантии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-dream-purple transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-comfortaa text-lg mb-6">Контакты</h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@sondostavka.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Сонная, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Работаем 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2024 СонДоставка. Все права защищены.
          </p>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-dream-purple transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-dream-purple transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
