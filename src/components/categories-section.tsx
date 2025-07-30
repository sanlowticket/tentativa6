import { motion } from "framer-motion";
import { 
  CheckCircle
} from "lucide-react";
import categoriesHero from "@/assets/categories-hero.jpg";

export default function CategoriesSection() {
  // Organizados por comprimento do texto para melhor layout
  const categories = [
    // Títulos curtos (1 linha)
    { icon: CheckCircle, title: "Capas", color: "text-orange-500" },
    { icon: CheckCircle, title: "Casacos", color: "text-orange-500" },
    { icon: CheckCircle, title: "Vestidos", color: "text-orange-500" },
    { icon: CheckCircle, title: "Manequins Pet", color: "text-orange-500" },
    
    // Títulos médios (2 linhas)
    { icon: CheckCircle, title: "Roupas de Banho", color: "text-orange-500" },
    { icon: CheckCircle, title: "Calcinhas e Cuecas", color: "text-orange-500" },
    { icon: CheckCircle, title: "Roupas para Gatos", color: "text-orange-500" },
    { icon: CheckCircle, title: "Camas e Tapetes", color: "text-orange-500" },
    { icon: CheckCircle, title: "Blusas e Camisas", color: "text-orange-500" },
    { icon: CheckCircle, title: "Roupas Cirúrgicas", color: "text-orange-500" },
    { icon: CheckCircle, title: "Calças e Saias", color: "text-orange-500" },
    { icon: CheckCircle, title: "Acessórios e Bolsas", color: "text-orange-500" },
    
    // Títulos longos (3+ linhas)
    { icon: CheckCircle, title: "Conjuntos e Macacões", color: "text-orange-500" },
    { icon: CheckCircle, title: "Roupas para Porquinho-da-índia", color: "text-orange-500" }
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
          {/* Imagem dos moldes */}
          <div className="mb-8">
            <img 
              src={categoriesHero} 
              alt="Moldes profissionais para roupas de pets"
              className="mx-auto rounded-lg shadow-lg max-w-md w-full h-auto"
            />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span>100 MOLDES DIVIDIDOS EM</span>
            <span className="text-orange-500"> 14 CATEGORIAS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 text-left border flex items-center gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <category.icon className={`w-6 h-6 ${category.color} flex-shrink-0`} />
              <h3 className="font-semibold text-base text-gray-900">{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
