import { motion } from "framer-motion";
import { ShoppingCart, Shield, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const handlePurchase = () => {
    window.open('https://pay.celetus.com/P1UPFZAS', '_blank');
  };

  const features = [
    "100 Moldes Profissionais em PDF",
    "7 Bônus Exclusivos",
    "Acesso Imediato e Vitalício",
    "Suporte Completo",
    "7 Dias de Garantia"
  ];

  return (
    <section className="py-20 relative bg-gray-50 mt-[-46px] mb-[-46px]" data-section="pricing">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <div className="text-2xl animate-bounce mb-2">🔥</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="text-orange-500">SUPER OFERTA</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Essa é a melhor escolha para quem quer ganhar dinheiro com roupas para pet
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-xl border relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold">
                OFERTA LIMITADA
              </div>
            </div>
            
            <div className="mt-8">
              {/* Preço riscado */}
              <div className="text-lg lg:text-xl font-bold text-gray-400 line-through mb-2">
                R$ 67,00
              </div>
              
              {/* Preço atual */}
              <div className="text-6xl lg:text-8xl font-bold text-orange-500 mb-4">
                R$ 10,00
              </div>
              <div className="text-gray-600 mb-8">
                TODOS OS MOLDES + 7 BÔNUS
              </div>
              
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-900">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                onClick={handlePurchase}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 rounded-lg font-bold text-xl hover:from-orange-600 hover:to-red-600 transition-all animate-pulse-cta w-full max-w-md flex items-center justify-center"
              >
                <ShoppingCart className="mr-3 h-6 w-6" />
                QUERO AGORA!
              </Button>
              
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Download Imediato</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Comece hoje mesmo a costurar, lucrar e encantar clientes!
          </p>
          <p className="text-gray-600">
            Com peças que todo mundo vai querer comprar
          </p>
        </motion.div>
      </div>
    </section>
  );
}
