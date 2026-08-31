"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "@phosphor-icons/react";

export function BootScreen() {
  const [stage, setStage] = useState<"awaiting" | "booting" | "complete">("awaiting");
  const [logs, setLogs] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  const bootSequence = [
    "INITIALIZING WORKSPACE...",
    "LOADING DEPENDENCIES...",
    "MOUNTING REACT FIBER...",
    "COMPILING C++ BINDINGS...",
    "INITIALIZING OGL SHADERS...",
    "ESTABLISHING NEURAL LINK...",
    "BYPASSING SECURITY PROTOCOLS...",
    "ACCESS GRANTED."
  ];

  const startBoot = () => {
    if (stage !== "awaiting") return;
    setStage("booting");
    
    let currentDelay = 0;
    bootSequence.forEach((log) => {
      // Random delay between 150ms and 350ms
      currentDelay += Math.random() * 200 + 150;
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
      }, currentDelay);
    });

    // Finish boot
    setTimeout(() => {
      setStage("complete");
    }, currentDelay + 800);
  };

  useEffect(() => {
    setIsClient(true);
    // Auto-start boot after a small delay
    setTimeout(() => {
      startBoot();
    }, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (stage !== "complete") {
      document.body.style.overflow = "hidden";
      window.scrollTo(0,0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [stage]);

  if (!isClient) return null;
  if (stage === "complete") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="boot-screen"
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white cursor-pointer"
        onClick={startBoot}
      >
        {stage === "awaiting" && (
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 text-accent font-mono tracking-widest text-sm"
          >
            <Terminal size={32} weight="duotone" />
            <span>[ CLICK TO INITIALIZE ]</span>
          </motion.div>
        )}

        {stage === "booting" && (
          <div className="w-full max-w-3xl px-8 flex flex-col gap-3 font-mono text-xs md:text-sm text-zinc-500">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === bootSequence.length - 1 ? "text-accent font-bold mt-4 text-base" : ""}
              >
                <span className="text-zinc-700 mr-4">{`0x${(1000 + i * 14).toString(16).toUpperCase()}`}</span>
                {log}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
