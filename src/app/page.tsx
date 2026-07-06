import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TechStackSection />
        <AboutPreviewSection />
        <FeaturedProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
