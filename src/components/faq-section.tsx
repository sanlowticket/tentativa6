import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import faqImage from "@/assets/faq-image.jpg";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como recebo os moldes após a compra?",
      answer: "Após confirmar o pagamento, você recebe imediatamente no seu email um link para download com todos os 100 moldes em PDF de alta qualidade, prontos para imprimir."
    },
    {
      question: "Os moldes vêm com instruções de costura?",
      answer: "Sim! Cada molde inclui instruções detalhadas passo a passo, com ilustrações claras para facilitar a confecção, mesmo para iniciantes."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeita com os moldes, devolvemos 100% do seu dinheiro, sem perguntas ou burocracias."
    },
    {
      question: "Os moldes servem para todos os tamanhos de pets?",
      answer: "Sim! Cada molde vem com vários tamanhos (PP, P, M, G, GG) e tabela de medidas para você ajustar perfeitamente ao seu pet."
    },
    {
      question: "Preciso de impressora especial para os moldes?",
      answer: "Não! Os moldes são otimizados para impressão caseira em folha A4 comum. Alguns moldes maiores vêm divididos em várias folhas com marcações para junção."
    },
    {
      question: "E se eu não souber costurar muito bem?",
      answer: "Perfeito para iniciantes! Os moldes incluem instruções ilustradas passo a passo, dicas de costura e suporte completo para tirar suas dúvidas."
    }
  ];

  return (
    <section className="pt-2 pb-8 relative bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Imagem de suporte às dúvidas */}
          <div className="mb-10">
            <img 
              src={faqImage} 
              alt="Pet usando roupinha feita com molde profissional"
              className="mx-auto rounded-lg shadow-lg max-w-48 w-full h-auto"
            />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span>DÚVIDAS</span>
            <span className="text-orange-500"> FREQUENTES</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa saber sobre os moldes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-orange-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}