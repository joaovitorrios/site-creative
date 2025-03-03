import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Premium',
    price: 200,
    features: [
      '2 vídeos profissionais mensais',
      'Interação nos Stories para engajamento',
      'Cards promocionais e sobre os produtos',
      'Interação presencial semanal na loja',
      'Cards especiais para feriados'
    ]
  },
  {
    name: 'Pro',
    price: 400,
    features: [
      '3 vídeos profissionais mensais',
      'Interação diária nos Stories',
      'Cards promocionais e institucionais',
      'Cards especiais para feriados',
      'Postagens estratégicas',
      'Suporte personalizado 24/7',
      'Otimização de campanhas',
      'Relatórios mensais de desempenho',
      'Consultoria de marketing digital',
      'Análise de concorrência'
    ]
  },
  {
    name: 'Plus',
    price: 600,
    features: [
      '4 vídeos profissionais mensais',
      'Interação diária e enquetes',
      'Cards promocionais e educativos',
      'Cards especiais para feriados',
      'Postagens e anúncios patrocinados',
      'Suporte premium 24/7',
      'Estratégias avançadas de marketing',
      'Produção de conteúdos exclusivos',
      'Acompanhamento mensal personalizado',
      'Análise de métricas avançadas',
      'Gestão completa de redes sociais',
      'Planejamento estratégico trimestral'
    ]
  }
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="services-bg absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Nossos{' '}
            <span className="text-[#F20574]">
              Planos
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 animate-fade-in-delay">
            Escolha o plano ideal para impulsionar sua presença digital
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#F20574] transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Plano {plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-[#F20574]">R${plan.price}</span>
                  <span className="ml-1 text-xl text-gray-500">/mês</span>
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-[#84BF04]" />
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="https://api.whatsapp.com/send?phone=5574988458672&text=Olá%2C+quero+saber+mais+sobre+os+serviços+da+Agência+Creative%21+🤩"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 rounded-lg bg-[#F20574] text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 text-center"
                >
                  Começar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;