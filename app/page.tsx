import NavbarTopBar from "@/components/navbar";
import HeroCertificacionIngles from "@/components/hero";
import ProblemaSection from "@/components/problem";
import AboutSection from "@/components/about";
import TestimoniosSection from "@/components/testimonials";
import OfertaPrincipalSection from "@/components/offer";
import ServiciosSection from "@/components/service";
import ComoFuncionaSection from "@/components/how";
import BeneficiosSection from "@/components/benefits";
import FAQSection from "@/components/faq";
import CTASection from "@/components/cta";
import Footer from "@/components/footer"; 
import { ScrollToTop } from "@/components/float-buttons/ScrollToTop";
import { FloatingWhatsApp } from "@/components/float-buttons/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <NavbarTopBar />
      <HeroCertificacionIngles />
      <ProblemaSection />
      <AboutSection />
      <TestimoniosSection />
      <OfertaPrincipalSection />
      <ServiciosSection />
      <ComoFuncionaSection />
      <BeneficiosSection />
      <FAQSection />
      <CTASection />
      <Footer />

      <ScrollToTop />
      <FloatingWhatsApp />
    </main>
  );  
}
