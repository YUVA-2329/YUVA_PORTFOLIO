import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import LightRays from "@/components/ui/LightRays";
import { LanguagesScroll } from "@/components/sections/LanguagesScroll";
import { ProjectsArchive } from "@/components/sections/ProjectsArchive";
import { BuiltInPublic } from "@/components/sections/BuiltInPublic";
import { FinalSection } from "@/components/sections/FinalSection";
import { Footer } from "@/components/sections/Footer";
import { BootScreen } from "@/components/ui/BootScreen";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-background font-sans overflow-x-hidden">
      <BootScreen />
      <Navbar />
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
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
          <LanguagesScroll />
          <ProjectsArchive />
          <BuiltInPublic />
          <FinalSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
