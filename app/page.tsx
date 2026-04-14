import NavbarTopBar from "@/components/navbar";
import HeroCertificacionIngles from "@/components/hero";
import ProblemaSection from "@/components/problem";
import AboutSection from "@/components/about";
import OfertaPrincipalSection from "@/components/offer";
import ServiciosSection from "@/components/service";
import ComoFuncionaSection from "@/components/how";
import BeneficiosSection from "@/components/benefits";

export default function Home() {
  return (
    <main>
      <NavbarTopBar />
      <HeroCertificacionIngles />
      <ProblemaSection />
      <AboutSection />
      <OfertaPrincipalSection />
      <ServiciosSection />
      <ComoFuncionaSection />
      <BeneficiosSection />
    </main>
  );  
}
