"use client";
import { motion } from "motion/react";
import Link from "next/link";
import {UnicornScene} from "./components/GradientBackground.tsx";
import { useEffect } from "react";
import IndexAnimation from "./components/IndexAnimation.tsx";
import OuterCircleBox from "./components/OuterCircleBox.tsx";
import ParallaxSection from "./components/ParallaxSection.tsx";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const anchors = document.getElementsByTagName("a");
      for (const anchor of anchors) {
        console.log(anchor.href);
        if (anchor.href === "https://unicorn.studio/?utm_source=public-url") {
          anchor.style = "display: none;";
        }
      }
    }, 1000);
  }, []);

  return (
    <main>
      <IndexAnimation/>
      <ParallaxSection/>
      <OuterCircleBox/>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="relative w-full h-screen"
      >
        <UnicornScene projectId={"data/4flspySlCrfvkfRH7Co8.json"} />
        <div className="absolute inset-0 flex justify-center items-center">
          <Link
            href="/about"
            className="bg-slate-600 text-white px-4 py-2 rounded"
          >
            Dashboard
          </Link>
        </div>
      </motion.div> */}
    </main>
  );
}
