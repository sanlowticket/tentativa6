import { motion } from "framer-motion";

export default function BonusSection() {
  const bonuses = [
    {
      number: 1,
      title: "Guia de Medidas",
      description: "Saiba medir corretamente qualquer porte de pet"
    },
    {
      number: 2,
      title: "Planner de Produção",
      description: "Organize pedidos, moldes e entregas"
    },
    {
      number: 3,
      title: "Sugestões de Tecidos",
      description: "Mais conforto e durabilidade para suas peças"
    },
    {
      number: 4,
      title: "Guia de Precificação",
      description: "Precifique corretamente sem perder vendas"
    },
    {
      number: 5,
      title: "Personalização Criativa",
      description: "Destaque suas peças e cobre mais por elas"
    },
    {
      number: 6,
      title: "Coleções Temáticas",
      description: "Sugestões prontas para vender o ano inteiro"
    },
    {
      number: 7,
      title: "Dicas de Vendas",
      description: "Transforme seu Instagram em vitrine"
    }
  ];

  return (
    <section className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-orange-500">7 BÔNUS</span>
            <span> EXCLUSIVOS</span>
          </h2>
          <p className="text-xl text-gray-600">
            Além dos moldes completos, você vai receber também:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                  {bonus.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{bonus.title}</h3>
              </div>
              <p className="text-gray-600">{bonus.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
