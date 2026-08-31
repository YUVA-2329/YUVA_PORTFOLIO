"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, BracketsCurly, TreeStructure } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import DepthText from "@/components/ui/DepthText";

const languages = [
  {
    id: "java",
    name: "JAVA",
    icon: <Code size={20} weight="duotone" className="text-accent" />,
    range: [0, 0.33],
    project: {
      name: "SYSTEMS ARCHITECTURE",
      desc: "Robust backend services and object-oriented design patterns implemented in Java.",
      github: "https://github.com/YUVA-2329"
    }
  },
  {
    id: "c",
    name: "C",
    icon: <BracketsCurly size={20} weight="duotone" className="text-accent" />,
    range: [0.33, 0.66],
    project: {
      name: "MEMORY & SYSTEMS",
      desc: "Low-level system programming and direct hardware manipulation in C.",
      github: "https://github.com/YUVA-2329"
    }
  },
  {
    id: "dsa",
    name: "DSA",
    icon: <TreeStructure size={20} weight="duotone" className="text-accent" />,
    range: [0.66, 1],
    project: {
      name: "LOGIC & OPTIMIZATION",
      desc: "Advanced data structures, graphs, and algorithmic problem solving.",
      github: "https://github.com/YUVA-2329"
    }
  }
];

function LanguageItem({ lang }: { lang: any }) {
  return (
    <section className="h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-24 relative overflow-hidden">
      
      {/* Glowing Division Bar Effect (React Bits inspired) */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(212,162,47,0.8)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 150, scale: 0.7 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ 
          type: "spring", 
          stiffness: 80, 
          damping: 15, 
          mass: 1.2,
        }}
        className="flex w-full h-full flex-col-reverse md:flex-row items-center justify-center gap-12"
      >
        {/* Left Side: Related Project Box */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
          <div className="card-surface p-8 max-w-sm w-full relative group transition-all duration-500 hover:border-accent hover:shadow-[0_0_30px_rgba(212,162,47,0.2)] bg-black/60 backdrop-blur-2xl border border-white/20">
            <EyebrowBadge>RELATED PROJECT</EyebrowBadge>
            <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-white mt-6 mb-2">
              {lang.project.name}
            </h3>
            <p className="font-sans text-zinc-300 text-sm mb-8 font-medium leading-relaxed">
              {lang.project.desc}
            </p>
            <a 
              href={lang.project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              VIEW REPO <ArrowUpRight size={14} weight="bold" />
            </a>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Language Title */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-4">
            {lang.icon}
            <span className="font-mono text-sm uppercase tracking-widest text-zinc-400">
              CORE EXPERTISE
            </span>
          </div>
          <DepthText 
            text={lang.name} 
            faceColor="#ffffff" 
            depthColor="#d4a22f" 
            fontSize="clamp(4rem, 10vw, 8rem)" 
            tilt={5} 
            layers={15} 
          />
        </div>
      </motion.div>
    </section>
  );
}

export function LanguagesScroll() {
  return (
    <div className="relative w-full bg-transparent text-foreground flex flex-col items-center">
      {languages.map((lang) => (
        <LanguageItem key={lang.id} lang={lang} />
      ))}
    </div>
  );
}
