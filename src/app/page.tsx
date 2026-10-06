import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import LightRays from "@/components/ui/LightRays";
import { LanguagesScroll } from "@/components/sections/LanguagesScroll";
import { ProjectsArchive } from "@/components/sections/ProjectsArchive";
import { FinalSection } from "@/components/sections/FinalSection";
import { Footer } from "@/components/sections/Footer";
import { BootScreen } from "@/components/ui/BootScreen";
import { ThemeController } from "@/components/ui/ThemeController";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-background font-sans overflow-x-hidden transition-colors duration-700">
      <ThemeController />
      <BootScreen />
      <Navbar />
      <div className="fixed inset-0 z-0 pointer-events-none bg-background transition-colors duration-700">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <main className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Hero />
          <About />
          <LanguagesScroll />
          <ProjectsArchive />
          <FinalSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
