import React, { useState } from 'react';
import { Instagram, Youtube, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#E4EAF2] relative overflow-hidden">
      <div className="contact-bg absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Entre em{' '}
            <span className="text-[#F20574]">
              Contato
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos prontos para transformar sua presença digital
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-xl p-8 animate-slide-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F20574] focus:ring-[#F20574] transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F20574] focus:ring-[#F20574] transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F20574] focus:ring-[#F20574] transition-all duration-300"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#F20574] text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>

            {showSuccess && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg animate-fade-in">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
          </div>

          <div className="space-y-8 animate-slide-right">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-[#F20574]" />
                  <span className="ml-3 text-gray-600">creativetechvr@gmail.com</span>
                </div>
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-[#84BF04]" />
                  <span className="ml-3 text-gray-600">(74) 98845-8672</span>
                </div>
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-[#F28B66]" />
                  <span className="ml-3 text-gray-600">Várzea da Roça, Bahia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/agenciacreativee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F20574]/10 rounded-lg hover:bg-[#F20574]/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6 text-[#F20574]" />
                </a>
                <a
                  href="https://www.youtube.com/@creativetechvr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#84BF04]/10 rounded-lg hover:bg-[#84BF04]/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Youtube className="h-6 w-6 text-[#84BF04]" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5574988458672&text=Olá%2C+quero+saber+mais+sobre+os+serviços+da+Agência+Creative%21+🤩"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#F28B66]/10 rounded-lg hover:bg-[#F28B66]/20 transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle className="h-6 w-6 text-[#F28B66]" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F20574] to-[#84BF04] p-6 rounded-lg text-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2">Pronto para começar?</h3>
              <p className="mb-4">
                Entre em contato agora e transforme sua presença digital com a Agência CREATIVE.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5574988458672&text=Olá%2C+quero+saber+mais+sobre+os+serviços+da+Agência+Creative%21+🤩"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-[#F20574] rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;