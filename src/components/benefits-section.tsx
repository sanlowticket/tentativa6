import { motion } from "framer-motion";
import { FileText, Heart, Infinity, Gift } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: FileText,
      title: "100 Moldes Profissionais",
      description: "PDF prontos para imprimir, testados e organizados por categorias",
      color: "text-orange-500"
    },
    {
      icon: Heart,
      title: "Múltiplas Espécies",
      description: "Modelos para cães, gatos e até porquinhos-da-índia",
      color: "text-orange-500"
    },
    {
      icon: Infinity,
      title: "Acesso Vitalício",
      description: "Acesso imediato e vitalício, zero mensalidade",
      color: "text-orange-500"
    },
    {
      icon: Gift,
      title: "7 Bônus Exclusivos",
      description: "Instruções simples + bônus para facilitar costura e vendas",
      color: "text-orange-500"
    }
  ];

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
            <span className="text-orange-500">O QUE VOCÊ</span>
            <span> VAI RECEBER?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma estratégia completa para costurar e lucrar com roupas pet, sem complicação!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl ${benefit.color} mb-4 text-center`}>
                <benefit.icon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
