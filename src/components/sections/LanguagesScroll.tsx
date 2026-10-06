"use client";

import { motion } from "framer-motion";
import { Code, BracketsCurly, TreeStructure } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import DepthText from "@/components/ui/DepthText";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

const languages = [
  {
    id: "java",
    name: "JAVA",
    icon: <Code size={20} weight="duotone" className="text-accent" />,
    subtitle: "Object-Oriented Programming · Problem Solving · Core Java",
    concepts: [
      "OOP",
      "Classes & Objects",
      "Inheritance",
      "Polymorphism",
      "Exception Handling",
      "Collections",
      "Problem Solving"
    ]
  },
  {
    id: "c",
    name: "C",
    icon: <BracketsCurly size={20} weight="duotone" className="text-accent" />,
    subtitle: "Programming Foundations · Memory · Systems Thinking",
    concepts: [
      "Pointers",
      "Arrays",
      "Structures",
      "Dynamic Memory",
      "File Handling",
      "Algorithms",
      "Problem Solving"
    ]
  },
  {
    id: "dsa",
    name: "DSA",
    icon: <TreeStructure size={20} weight="duotone" className="text-accent" />,
    subtitle: "Data Structures & Algorithms",
    concepts: [
      "Arrays",
      "Strings",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Searching",
      "Sorting",
      "Algorithmic Problem Solving"
    ]
  }
];

type LanguageProps = {
  id: string;
  name: string;
  icon: React.ReactNode;
  subtitle: string;
  concepts: string[];
};

function LanguageItem({ lang, index }: { lang: LanguageProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150, scale: 0.7 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        type: "spring", 
        stiffness: 80, 
        damping: 15, 
        mass: 1.2,
        delay: index * 0.15
      }}
      className="flex flex-col items-center justify-start gap-8 w-full group relative"
    >
      <div className="flex flex-col items-center text-center mt-4">
        <div className="flex items-center gap-3 mb-4">
          {lang.icon}
          <span className="font-mono text-sm uppercase tracking-widest text-zinc-400">
            CORE EXPERTISE
          </span>
        </div>
        <DepthText 
          text={lang.name} 
          faceColor="var(--foreground)" 
          depthColor="var(--accent)" 
          fontSize="clamp(3rem, 5vw, 4.5rem)" 
          tilt={5} 
          layers={12} 
        />
      </div>

      <div className="card-surface p-6 w-full relative transition-all duration-500 hover:border-accent hover:shadow-[0_0_30px_rgba(212,162,47,0.2)] bg-black/60 backdrop-blur-2xl border border-white/20 flex-grow flex flex-col items-center text-center mt-4">
        <EyebrowBadge>FOUNDATION</EyebrowBadge>
        
        <h3 className="font-sans text-lg font-bold tracking-tight text-white mt-6 mb-6 leading-snug">
          {lang.subtitle}
        </h3>
        
        <div className="flex flex-wrap justify-center gap-2 relative z-10">
          {lang.concepts.map((concept: string) => (
            <span 
              key={concept} 
              className="inline-block border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-300 transition-colors hover:text-white hover:bg-white/10"
            >
              {concept}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function LanguagesScroll() {
  return (
    <section className="relative w-full bg-transparent text-foreground flex flex-col items-center py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px]">
        <AnimatedSection className="mb-20 flex flex-col gap-6">
          <AnimatedItem>
            <EyebrowBadge>02</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              TECHNICAL<br />
              <span className="text-accent">FOUNDATIONS.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 w-full">
          {languages.map((lang, index) => (
            <LanguageItem key={lang.id} lang={lang} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
