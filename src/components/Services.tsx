import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Волшебные сны",
      description:
        "Сказочные приключения с драконами, принцессами и волшебниками",
      price: "от 299₽",
    },
    {
      icon: "Palmtree",
      title: "Тропические грезы",
      description: "Отдых на райских островах с белоснежными пляжами",
      price: "от 399₽",
    },
    {
      icon: "Mountain",
      title: "Горные пейзажи",
      description: "Захватывающие виды альпийских вершин и кристальных озер",
      price: "от 349₽",
    },
    {
      icon: "Star",
      title: "Космические путешествия",
      description: "Полеты среди звезд и исследование далеких галактик",
      price: "от 449₽",
    },
    {
      icon: "Coffee",
      title: "Уютные моменты",
      description: "Теплые вечера у камина с близкими людьми",
      price: "от 249₽",
    },
    {
      icon: "Gamepad2",
      title: "Детские мечты",
      description: "Яркие приключения с любимыми героями мультфильмов",
      price: "от 199₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-comfortaa text-dream-purple mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-black">
            Выберите идеальный сон из нашего каталога или закажите
            индивидуальный сюжет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="from-slate-300 to-slate-200 rounded-3xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-[#ffffff]"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-transparent">
                <Icon name={service.icon} size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-comfortaa mb-4 text-slate-700">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-comfortaa text-dream-purple">
                  {service.price}
                </span>
                <button className="text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors bg-slate-600">
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-slate-800 hover:bg-slate-700 px-12 py-4 rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105 text-[#ffffff] font-semibold">
            Посмотреть все услуги
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
