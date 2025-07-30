import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import mariaSilva from "@/assets/maria-silva.jpg";
import anaCosta from "@/assets/ana-costa.jpg";
import carlaOliveira from "@/assets/carla-oliveira.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      time: "10:45",
      message: "Gente, não acreditam! Já vendi 5 roupinhas só esta semana com os moldes! 🐕❤️ Os clientes estão amando, principalmente os casaquinhos de inverno. Muito obrigada pela qualidade dos moldes!",
      avatar: carlaOliveira,
      isUser: false
    },
    {
      name: "Ana Costa", 
      time: "14:22",
      message: "Pessoal, preciso compartilhar isso com vocês! Fiz meu primeiro vestidinho usando os moldes e ficou perfeito! 😍 A Lulu ficou uma princesa. Já tenho 3 encomendas para fazer iguais!",
      avatar: anaCosta,
      isUser: false
    },
    {
      name: "Carla Oliveira",
      time: "16:38", 
      message: "Vocês não têm noção de como esses moldes mudaram minha vida! 💰 Já estou ganhando mais de R$ 2.000 por mês fazendo roupinhas pro final de semana. Os bônus então, são incríveis! Recomendo demais! 🙏",
      avatar: mariaSilva,
      isUser: false
    }
  ];

  const WhatsAppMessage = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto mb-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Header do WhatsApp */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">online</p>
        </div>
      </div>

      {/* Mensagem */}
      <div className="bg-green-100 rounded-lg p-4 relative">
        <p className="text-gray-800 text-sm leading-relaxed mb-2">
          {testimonial.message}
        </p>
        <div className="flex items-center justify-end gap-1 text-xs text-gray-500">
          <span>{testimonial.time}</span>
          <div className="flex">
            <Check className="w-3 h-3 text-blue-500" />
            <Check className="w-3 h-3 text-blue-500 -ml-1" />
          </div>
        </div>
        
        {/* Balão de fala */}
        <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-green-100"></div>
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
            <span>CLIENTES</span>
            <span className="text-orange-500"> SATISFEITAS</span>
          </h2>
          <p className="text-xl text-gray-600">
            Veja o que nossas clientes estão dizendo
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <WhatsAppMessage key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}