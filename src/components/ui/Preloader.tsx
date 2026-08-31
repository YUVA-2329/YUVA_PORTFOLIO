"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds max
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-background z-[100000] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* YUVA (0.5s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.1], filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"] }}
              transition={{ times: [0, 0.1, 0.8, 1], duration: 1, delay: 0.5 }}
              className="absolute text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-accent uppercase"
            >
              YUVA
            </motion.div>

            {/* KISHORE (1.5s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.1], filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"] }}
              transition={{ times: [0, 0.1, 0.8, 1], duration: 0.8, delay: 1.5 }}
              className="absolute text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-accent uppercase"
            >
              KISHORE
            </motion.div>

            {/* YUVA KISHORE (2.3s) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 2.3, ease: "easeOut" }}
              className="absolute text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-foreground whitespace-nowrap uppercase flex flex-col items-center"
            >
              <div>YUVA</div>
              <div className="text-accent mt-[-0.2em]">KISHORE</div>
            </motion.div>
          </div>

          <button
            onClick={() => setIsLoading(false)}
            className="absolute bottom-10 right-10 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-foreground transition-colors"
          >
            SKIP &rarr;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
