import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-orange-500 mb-4">
              PetMoldes Pro
            </div>
            <p className="text-gray-300">
              Transforme sua paixão pela costura em uma fonte de renda com nossos moldes profissionais.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Sobre o Produto</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>contato@petmoldespro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2024 PetMoldes Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
