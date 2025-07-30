import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";

export default function GallerySection() {
  const galleryImages = [
    {
      src: gallery1,
      alt: "Pet usando roupinha feita com molde profissional"
    },
    {
      src: gallery2,
      alt: "Pet com outfit customizado"
    },
    {
      src: gallery3,
      alt: "Roupinha para pet confeccionada"
    },
    {
      src: gallery4,
      alt: "Pet estiloso com roupa personalizada"
    },
    {
      src: gallery5,
      alt: "Pet fashion com moldes profissionais"
    },
    {
      src: gallery6,
      alt: "Roupinha de pet feita sob medida"
    },
    {
      src: gallery7,
      alt: "Pet com look exclusivo"
    },
    {
      src: gallery8,
      alt: "Fashion pet com roupinha artesanal"
    }
  ];

  // Componente do carrossel
  const Carousel = ({ images, startIndex, endIndex }: { images: typeof galleryImages, startIndex: number, endIndex: number }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
      loop: true,
      align: 'start',
      slidesToScroll: 1
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

    const carouselImages = images.slice(startIndex, endIndex);

    return (
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {carouselImages.map((image, index) => (
              <motion.div
                key={startIndex + index}
                className="flex-none w-80 relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] w-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
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
    );
  };

  // Componente para foto individual
  const SingleImage = ({ image, index }: { image: typeof galleryImages[0], index: number }) => (
    <motion.div
      className="flex justify-center mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-md">
        <div className="aspect-[4/3] w-full">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span>GALERIA DE</span>
            <span className="text-orange-500"> INSPIRAÇÕES</span>
          </h2>
          <p className="text-xl text-gray-600">
            Veja alguns exemplos do que você pode criar
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Foto 1 */}
          <SingleImage image={galleryImages[0]} index={0} />
          
          {/* Carrossel com fotos 2, 3, 4 */}
          <div className="mb-8">
            <Carousel images={galleryImages} startIndex={1} endIndex={4} />
          </div>
          
          {/* Foto 5 */}
          <SingleImage image={galleryImages[4]} index={4} />
          
          {/* Carrossel com fotos 6, 7, 8 */}
          <div className="mb-8">
            <Carousel images={galleryImages} startIndex={5} endIndex={8} />
          </div>
        </div>
      </div>
    </section>
  );
}
