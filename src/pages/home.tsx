import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import TargetAudienceSection from "@/components/target-audience-section";
import CategoriesSection from "@/components/categories-section";
import BonusSection from "@/components/bonus-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import CTAButton from "@/components/cta-button";
import PurchaseNotifications from "@/components/purchase-notifications";
import compraSegura from "@/assets/compra-segura.jpg";
import whatsappContato from "@/assets/whatsapp-contato.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <PurchaseNotifications />
      <HeroSection />
      <BenefitsSection />
      
      {/* CTA 1 - Acima da seção "Para quem é este produto" */}
      <CTAButton />
      
      <TargetAudienceSection />
      <CategoriesSection />
      
      {/* CTA 2 - Acima da seção "Galeria de inspirações" */}
      <CTAButton />
      
      <GallerySection />
      
      {/* CTA 3 - Acima da seção "7 bônus exclusivos" */}
      <CTAButton />
      
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      
      {/* CTA 4 - Acima do rodapé */}
      <CTAButton />
      
      {/* Imagens de Confiança */}
      <div className="flex items-center justify-center gap-4 py-8">
        <img 
          src={compraSegura} 
          alt="Compra Segura" 
          className="w-40 h-auto"
        />
        <img 
          src={whatsappContato} 
          alt="Contato WhatsApp" 
          className="w-40 h-auto"
        />
      </div>
      
      {/* Rodapé simples */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-300">
            &copy; 2025 Moldes Pet. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
