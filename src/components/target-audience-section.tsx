import { motion } from "framer-motion";
import { Scissors, Heart, Rocket, Star, CheckCircle, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export default function TargetAudienceSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 }
    }
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Autoplay functionality
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  const audiences = [
    {
      icon: Scissors,
      title: "Costureiras & Artesãs",
      description: "Que querem ganhar dinheiro com roupas para pets",
      color: "text-orange-500"
    },
    {
      icon: Heart,
      title: "Donas de Pets",
      description: "Que sabem costurar e buscam economia",
      color: "text-orange-500"
    },
    {
      icon: Rocket,
      title: "Empreendedoras",
      description: "Que querem iniciar um pequeno negócio com baixo investimento",
      color: "text-orange-500"
    },
    {
      icon: Star,
      title: "Busca por Qualidade",
      description: "Quem quer moldes prontos, variados e com qualidade",
      color: "text-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Resultados Reais",
      description: "Quem está cansada de moldes mal feitos e quer resultado de verdade",
      color: "text-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Iniciantes",
      description: "Mesmo sem experiência em moldes digitais - material fácil de entender",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-12 relative bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span>PARA QUEM É</span>
            <span className="text-orange-500"> ESTE PRODUTO?</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {audiences.map((audience, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <motion.div
                    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border mr-4 h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <audience.icon className={`w-10 h-10 ${audience.color} mb-4 mx-auto`} />
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{audience.title}</h3>
                    <p className="text-gray-600 text-sm">{audience.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            onClick={scrollNext}
            disabled={!canScrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
