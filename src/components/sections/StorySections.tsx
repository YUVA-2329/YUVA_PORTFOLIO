"use client";

import { useEffect, useRef } from "react";
// import { useScrollState } from "../3d/ScrollStore";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";
import { EyebrowBadge } from "../ui/EyebrowBadge";

const SECTIONS = [
  {
    id: "learn",
    num: "01",
    title: "LEARN.",
    desc: "Java code forming systems.",
    code: "class Developer {\n  String name = \"Yuva\";\n  void build() {\n    learn();\n    create();\n    ship();\n  }\n}"
  },
  {
    id: "understand",
    num: "02",
    title: "UNDERSTAND.",
    desc: "C++ memory structures.",
    code: "Node* current = head;\nwhile (current != nullptr) {\n  current = current->next;\n}"
  },
  {
    id: "solve",
    num: "03",
    title: "SOLVE.",
    desc: "Algorithms in motion.",
    code: "Array → Linked List → Tree → Graph"
  },
  {
    id: "experiment",
    num: "04",
    title: "EXPERIMENT.",
    desc: "Neural network topologies.",
    code: "model = NeuralNetwork()\nmodel.train(data)\nprediction = model(x)"
  },
  {
    id: "build",
    num: "05",
    title: "BUILD.",
    desc: "Full-stack architecture flow.",
    code: "REQUEST → REACT → API → NODE → DATABASE"
  }
];

export function StorySections() {
  // const setActiveSection = useScrollState((state) => state.setActiveSection);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // const index = Number(entry.target.getAttribute("data-index"));
            // setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".story-section");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [/* setActiveSection */]);

  return (
    <div ref={containerRef} className="relative z-10 w-full text-foreground">
      {SECTIONS.map((sec, i) => (
        <section 
          key={sec.id}
          data-index={i}
          className="story-section min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32"
        >
          <div className="max-w-2xl">
            <AnimatedSection className="flex flex-col gap-6">
              <AnimatedItem>
                <EyebrowBadge>§{sec.num}</EyebrowBadge>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="font-sans text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.85] tracking-tighter">
                  {sec.title}
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="font-sans text-xl md:text-2xl text-zinc-400 mt-4 max-w-lg">
                  {sec.desc}
                </p>
              </AnimatedItem>
              <AnimatedItem>
                <pre className="mt-8 p-6 bg-white/5 border border-white/10 rounded-lg font-mono text-sm text-zinc-300 overflow-x-auto">
                  <code>{sec.code}</code>
                </pre>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </section>
      ))}
    </div>
  );
}
