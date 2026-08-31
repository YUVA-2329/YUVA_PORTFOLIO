"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const projects = [
  {
    id: "01",
    name: "SYNERGY AI",
    subtitle: "THE INTELLIGENCE LAYER",
    description: "AI-powered startup intelligence and analysis.",
    tags: ["AI", "Market analysis", "Startup intelligence", "TAM / SAM / SOM"],
    github: "https://github.com/YUVA-2329",
  },
  {
    id: "02",
    name: "HACKER HOUSE / POW",
    subtitle: "WORK. VERIFIED BY MACHINES.",
    description: "AI × crypto marketplace concept.",
    tags: ["Bounties", "GitHub submissions", "AI requirement verification"],
    github: "https://github.com/YUVA-2329",
  },
  {
    id: "03",
    name: "CASE//ZERO",
    subtitle: "EVERY CLUE CHANGES THE STORY.",
    description: "Interactive crime-investigation experience.",
    tags: ["Evidence", "Timeline", "CCTV", "Maps", "Interrogation"],
    github: "https://github.com/YUVA-2329",
  },
  {
    id: "04",
    name: "SMART CITY",
    subtitle: "A CITY THAT CAN FEEL.",
    description: "My IoT / smart-city work.",
    tags: ["ESP32", "Sensors", "Ultrasonic", "Air quality", "Temperature"],
    github: "https://github.com/YUVA-2329",
  },
  {
    id: "05",
    name: "BUYWISE AI",
    subtitle: "SHOPPING, WITH A SECOND BRAIN.",
    description: "AI-powered product intelligence concept.",
    tags: ["AI", "Product comparison", "Recommendations", "Consumer decision"],
    github: "https://github.com/YUVA-2329",
  },
  {
    id: "06",
    name: "FACE AI",
    subtitle: "BIOMETRIC RECOGNITION.",
    description: "Advanced face recognition and tracking system.",
    tags: ["Computer Vision", "OpenCV", "Python", "Biometrics", "Security"],
    github: "https://github.com/YUVA-2329",
  }
];

export function ProjectsArchive() {
  return (
    <section id="projects" className="relative border-t border-white/5 bg-transparent px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-20 flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>06</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              FEATURED PROJECTS<br />
              <span className="text-accent">FROM MY WORK.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((p) => (
            <AnimatedSection key={p.id} className="group relative flex flex-col gap-6 md:grid md:grid-cols-[1fr_2fr] md:gap-12">
              <AnimatedItem>
                <div className="flex flex-col items-start gap-4 h-full pt-4">
                  <EyebrowBadge>{p.id}</EyebrowBadge>
                  <h3 className="font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl break-words w-full mt-2">
                    {p.name}
                  </h3>
                  <div className="font-mono text-sm uppercase tracking-widest text-accent mb-2">
                    {p.subtitle}
                  </div>
                  <p className="font-sans text-lg text-zinc-400 max-w-md">
                    {p.description}
                  </p>
                  
                  <div className="mt-8 flex gap-6 font-mono text-xs font-bold uppercase tracking-widest text-zinc-300">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors bg-white/5 px-5 py-3 rounded-full border border-white/10">
                      GITHUB REPO <ArrowUpRight size={16} weight="bold" />
                    </a>
                  </div>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="card-surface h-full min-h-[300px] w-full p-8 transition-colors duration-500 group-hover:border-white/10 md:min-h-[450px] flex flex-col justify-end relative overflow-hidden">
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-block border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* Subtle Background Accent on Hover */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </AnimatedItem>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
