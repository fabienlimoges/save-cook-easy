import { HeroSection } from "@/components/HeroSection";
import { FrustrationSection } from "@/components/FrustrationSection";
import { PromiseSection } from "@/components/PromiseSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FrustrationSection />
      <PromiseSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
