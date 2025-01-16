"use client";
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

const IndexAnimation = ({
  text = "I like",
  words = ["designing", "coding", "croissants"],
}: {
  text: string;
  words: string[];
}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold tracking-tighter flex flex-col items-center gap-1.5 w-fit mx-auto space-y-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-6 bg-gradient-to-r from-black via-slate-800 to-black bg-clip-text text-transparent">Hej! I'm Katja</h1>
      <div className="text-center font-normal tracking-tighter grid grid-cols-[auto_12rem]">
        <div className="bg-gradient-to-r from-black via-slate-600 to-black bg-clip-text text-transparent flex-basis-1/2">
          {text}
          {""}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={words[index]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-300 bg-clip-text text-transparent pb-4 flex-basis-1/2"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IndexAnimation;
