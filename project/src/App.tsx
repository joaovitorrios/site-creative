import React, { useState } from 'react';
import { Menu, X, Instagram, Youtube, MessageCircle, Play, Users, Briefcase, Mail } from 'lucide-react';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/0pxFb1Jz/creative.png" 
                alt="Agência CREATIVE Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold rainbow-text">
                Agência CREATIVE
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'about', 'work', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item
                      ? 'text-[#F20574]'
                      : 'text-gray-600 hover:text-[#BF04B3]'
                  } capitalize transition-colors duration-200`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#F20574]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {['home', 'services', 'about', 'work', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#F20574] capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="animated-bg absolute inset-0"></div>
        <div className="marketing-elements"></div>
        <div className="interactive-dots"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-[#F2A30F]">Transforme sua presença digital</span> com a{' '}
                <span className="rainbow-text">
                  Agência CREATIVE
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-100 font-medium">
                Especialistas em marketing digital, identidade visual e produção de vídeos profissionais.
                Eleve sua marca ao próximo nível.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-6 py-3 bg-[#F20574] text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity animate-pulse"
                >
                  Nossos Serviços
                  <Play size={20} />
                </button>
                <a
                  href="https://api.whatsapp.com/send?phone=5574988458672&text=Olá%2C+quero+saber+mais+sobre+os+serviços+da+Agência+Creative%21+🤩"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#9904D9] text-white rounded-lg flex items-center gap-2 hover:bg-[#BF04B3] transition-colors"
                >
                  Fale Conosco
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Equipe Agência CREATIVE"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl animate-bounce">
                <div className="flex gap-4">
                  <div className="text-center">
                    <Play className="w-8 h-8 text-[#F20574] mx-auto" />
                    <p className="text-sm font-medium mt-1">Vídeos Pro</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-[#9904D9] mx-auto" />
                    <p className="text-sm font-medium mt-1">Marketing</p>
                  </div>
                  <div className="text-center">
                    <Briefcase className="w-8 h-8 text-[#F2A30F] mx-auto" />
                    <p className="text-sm font-medium mt-1">Estratégia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#F20574] via-[#9904D9] to-[#F2780C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://i.ibb.co/0pxFb1Jz/creative.png" 
                alt="Agência CREATIVE Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h2 className="text-2xl font-bold rainbow-text">Agência CREATIVE</h2>
                <p className="text-white/90">transformando as realidades</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <a 
                href="https://www.instagram.com/agenciacreativee/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F20574] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@creativetechvr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F20574] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5574988458672&text=Olá%2C+quero+saber+mais+sobre+os+serviços+da+Agência+Creative%21+🤩"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F20574] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/90">
            <p>&copy; {new Date().getFullYear()} Agência CREATIVE. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;