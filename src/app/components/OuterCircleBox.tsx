import * as React from "react";
import { motion } from "motion/react";
import GradientBackground from "./GradientBackground";

export default function OuterCircleBox() {
  return (
    <div className="grid self-center m-12">
      <motion.section
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-center w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              duration: 1.5,
              ease: "easeInOut",
            },
          },
        }}
      >
        <motion.div
          className="card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut", damping: 20 } },
          }}
        >
          <p>Lorem Ipsum</p>
          <div className="holder one relative">
            <div className="circle">
                <GradientBackground projectId={"data/VRp3AcZCSgUbvl919bVE.json"} />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut", damping: 20 } },
          }}
        >
          <p>Lorem Ipsum</p>
          <div className="holder two"></div>
        </motion.div>
        <motion.div
          className="card row-start-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut", damping: 20 } },
          }}
        >
          <p>Lorem Ipsum</p>
          <div className="holder three"></div>
        </motion.div>
        <motion.div
          className="card row-start-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut", damping: 20 } },
          }}
        >
          <p>Lorem Ipsum</p>
          <div className="holder four"></div>
        </motion.div>
      </motion.section>
    </div>
  );
};

