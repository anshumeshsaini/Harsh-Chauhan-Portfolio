import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofSection from "@/components/ProofSection";
import Framework from "@/components/Framework";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProofSection />
        <Framework />
        <Services />
        <CaseStudies />
        <About />
        <Insights />

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
