import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      avatar: "👩‍💼",
      rating: 5,
      text: "Заказывала сон про путешествие в Париж. Проснулась с таким чувством, будто действительно там побывала! Невероятные ощущения!",
      dream: "Романтический Париж",
    },
    {
      name: "Михаил Козлов",
      avatar: "👨‍💻",
      rating: 5,
      text: "После тяжелого рабочего дня заказал расслабляющий сон на пляже. Утром чувствовал себя полностью отдохнувшим!",
      dream: "Тропический пляж",
    },
    {
      name: "Елена Смирнова",
      avatar: "👩‍🎨",
      rating: 5,
      text: "Дочке заказывала сон про единорогов. Она проснулась в восторге и весь день рассказывала об удивительных приключениях!",
      dream: "Сказочный лес",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-dream-cloud to-dream-moon"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-comfortaa text-dream-purple mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Узнайте, что говорят те, кто уже попробовал наши сны
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-dream-purple flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-comfortaa text-lg text-dream-purple">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="inline-block bg-dream-purple/10 text-dream-purple px-4 py-2 rounded-full text-sm">
                Сон: {testimonial.dream}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
            <Icon
              name="Heart"
              size={48}
              className="text-dream-purple mx-auto mb-4"
            />
            <h3 className="text-2xl font-comfortaa text-dream-purple mb-4">
              Более 10,000 довольных клиентов
            </h3>
            <p className="text-slate-600">
              Присоединяйтесь к тысячам людей, которые уже улучшили качество
              своего сна с нашей помощью
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
