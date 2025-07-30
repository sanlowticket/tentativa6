import { motion } from "framer-motion";
import { Rocket, Play, Download, Infinity, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import heroMiddle from "@/assets/hero-middle.png";

export default function HeroSection() {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('section[data-section="pricing"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Imagens do carrossel
  const carouselImages = [
    {
      src: hero1,
      alt: "Pet usando roupinha customizada"
    },
    {
      src: hero2,
      alt: "Pet com roupa feita com molde profissional"
    },
    {
      src: hero3,
      alt: "Pet estiloso com roupinha personalizada"
    }
  ];

  // Configuração do carrossel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center'
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // 4 segundos

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <>
      {/* Faixa de urgência no topo */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-4 px-4 font-bold text-base">
        🔥 ÚLTIMOS DIAS DESSA OFERTA! 🔥
      </div>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 pt-8">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left order-1 lg:order-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              <span className="text-orange-500">
                TRANSFORME
              </span>
              <br />
              <span>Sua Costura em <span className="text-orange-500">RENDA</span></span>
            </h1>
            
            {/* Imagem entre título e descrição */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <img 
                src={heroMiddle} 
                alt="Moldes Pet - Coleção Profissional"
                className="max-w-64 w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <span className="text-orange-500 font-semibold">100 moldes</span> profissionais de roupas para pets prontos para imprimir.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={scrollToOffer}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all animate-pulse-cta"
              >
                <Rocket className="mr-2 h-5 w-5" />
                GARANTIR ACESSO AGORA
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-base text-gray-600">
              <div className="flex items-center gap-2">
                <Download className="h-6 w-6 text-orange-500" />
                <span>Entrega Imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <Infinity className="h-6 w-6 text-orange-500" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-orange-500" />
                <span>100% Seguro</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative order-2 lg:order-2 flex justify-center lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Carrossel com 3 imagens */}
            <div className="relative w-full">
              <div className="overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
                <div className="flex">
                  {carouselImages.map((image, index) => (
                    <div key={index} className="flex-none w-full">
                      <div className="aspect-[4/3] w-full">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões de navegação */}
              <button
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all duration-300 ${
                  canScrollPrev ? 'opacity-100 hover:bg-white' : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={scrollPrev}
                disabled={!canScrollPrev}
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all duration-300 ${
                  canScrollNext ? 'opacity-100 hover:bg-white' : 'opacity-50 cursor-not-allowed'
                }`}
                onClick={scrollNext}
                disabled={!canScrollNext}
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>


            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </>
  );
}
