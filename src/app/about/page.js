'use client'
import { UnicornScene } from "../components/GradientBackground";
import { HeaderAnimation } from "../components/HeaderAnimation";
import { motion } from "motion/react";


export default function About(){
  return (
    <main className="relative">
      <div className="absolute z-10 m-12">

      <HeaderAnimation/>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="relative w-full h-screen"
      >
        <UnicornScene projectId={"data/65jljJNHjXech7H08Dgv.json"} className="absolute -z-10"/>
      </motion.div>
    </main>
  )
}
