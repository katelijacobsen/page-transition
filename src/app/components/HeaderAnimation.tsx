"use client";
import { Poppins } from "@next/font/google";
import { AnimatePresence, useInView, motion } from "motion/react";
import * as React from "react";

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "900",
});

export function HeaderAnimation({ text = "About Me" }: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex space-x-1">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${poppinsBold.className} text-8xl tracking-tight `}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
