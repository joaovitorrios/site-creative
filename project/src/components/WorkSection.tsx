import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const projects = [
  {
    title: "Campanha Digital Inovadora",
    description: "Aumente o engajamento e as vendas do seu comércio com estratégias inovadoras! Criamos campanhas para stories e postagens interativas, destacando seus produtos e conquistando seu público.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videos: [
      {
        url: "https://www.youtube.com/embed/MBhO0Wp1um4?origin=https://stackblitz.com",
        title: "Supermercado O Barateiro"
      },
      {
        url: "https://www.youtube.com/embed/YzyqH2xgm9M?origin=https://stackblitz.com",
        title: "Madeireira"
      }
    ]
  },
  {
    title: "Identidade Visual",
    description: "Transformamos a identidade da sua marca! Criamos perfis profissionais para redes sociais, com um feed moderno e personalizado, que transmite profissionalismo e inovação para seus clientes.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    videos: [
      {
        url: "https://youtube.com/embed/3bdQ9pHH3dg?origin=https://stackblitz.com",
        title: "Alvorada Transportes"
      },
      {
        url: "https://youtube.com/embed/IxWiAMCCMCo?origin=https://stackblitz.com",
        title: "Academia Zumba"
      }
    ]
  },
  {
    title: "Produção Audiovisual",
    description: "Conte sua história com vídeos profissionais e impactantes! Criamos conteúdos audiovisuais de alta qualidade para fortalecer sua marca e gerar mais resultados.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
    videos: [
      {
        url: "https://www.instagram.com/reel/DEkZpYdx5XJ",
        title: "Madeireira"
      },
      {
        url: "https://www.instagram.com/reel/DEDk3fjJ50n",
        title: "Toinho Motos"
      },
      {
        url: "https://www.instagram.com/reel/DFgL6qpPUWR",
        title: "Supermercado O Barateiro"
      },
      {
        url: "https://www.instagram.com/reel/DFvF48dOK6C",
        title: "Tribos Açaí"
      }
    ]
  }
];

function VideoModal({ videos, onClose, type, description }: { videos: any[], onClose: () => void, type: string, description: string }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold rainbow-text">{type}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 border-b">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="p-4 grid gap-4">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-4 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="font-semibold mb-2">{video.title}</h4>
              {type === 'Produção Audiovisual' ? (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F20574] hover:underline flex items-center gap-2"
                >
                  <Play size={20} />
                  Ver no Instagram
                </a>
              ) : (
                <div className="aspect-video">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<null | any>(null);

  return (
    <section id="work" className="py-20 bg-white relative overflow-hidden">
      <div className="work-bg absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos{' '}
            <span className="rainbow-text">
              Trabalhos
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Conheça alguns dos nossos casos de sucesso
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-200 line-clamp-2">{project.description}</p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 inline-flex items-center text-white hover:text-[#F20574] transition-colors"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Projeto
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <VideoModal 
            videos={selectedProject.videos} 
            onClose={() => setSelectedProject(null)}
            type={selectedProject.title}
            description={selectedProject.description}
          />
        )}
      </div>
    </section>
  );
}

export default WorkSection;