import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#E4EAF2] relative overflow-hidden">
      <div className="about-bg absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Nossa{' '}
            <span className="text-[#F20574]">
              História
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 animate-fade-in-delay">
            Transformando negócios através da inovação digital
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Nossa equipe"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="animate-slide-right">
            <p className="text-lg text-gray-700 leading-relaxed">
              A Agência CREATIVE nasceu da paixão por transformar ideias em realidade digital. 
              Nossa jornada começou com o compromisso de oferecer soluções inovadoras 
              em marketing digital, produção audiovisual e estratégias de crescimento online.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start transform hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#F20574]/10 rounded-lg animate-pulse">
                    <Target className="h-6 w-6 text-[#F20574]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Nossa Missão</h3>
                  <p className="mt-2 text-gray-600">
                    Impulsionar o sucesso dos nossos clientes através de estratégias 
                    digitais inovadoras e resultados mensuráveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start transform hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#84BF04]/10 rounded-lg animate-pulse">
                    <Lightbulb className="h-6 w-6 text-[#84BF04]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Nossa Visão</h3>
                  <p className="mt-2 text-gray-600">
                    Ser referência em transformação digital, criando conexões 
                    significativas entre marcas e seus públicos.
                  </p>
                </div>
              </div>

              <div className="flex items-start transform hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#F28B66]/10 rounded-lg animate-pulse">
                    <TrendingUp className="h-6 w-6 text-[#F28B66]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Nosso Impacto</h3>
                  <p className="mt-2 text-gray-600">
                    Já ajudamos centenas de empresas a alcançarem seus objetivos 
                    através de estratégias personalizadas e conteúdo de qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;