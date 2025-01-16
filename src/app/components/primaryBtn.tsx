//rafc
'use client';
import Link from "next/link";
import {motion} from "motion/react";

export const PrimaryBtn = ({ text }) => {
  return (
    <motion.div 
    whileHover={{
        scale: 1.1,
        backgroundPosition: "-200% 0", // Animate the gradient position
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.4,
      }}
      style={{ width: 100, height: 50 }}
    >
      <Link
        href={"/"}
        className={`animate-bg-shine border-[1px] rounded-2xl shadow bg-[length:200%_100%] tracking-wide duration-[2200ms]
        dark:bg-[linear-gradient(110deg,#1C1C1E,45%,#2E2E30,55%,#1C1C1E)] dark:text-gray-300 dark:border-gray-700
        bg-[linear-gradient(110deg,#F9FAFB,45%,#E5E7EB,55%,#F9FAFB)] text-gray-800 border-gray-300 text-6xl px-4
        `}
      >
        {text}
      </Link>
    </motion.div>
  );
};
