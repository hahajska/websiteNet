import React from "react";
import "./styles/Loading.scss";
import { motion } from "framer-motion";

export default function Loading() {
  const LoadingAnimace = {
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      ease: "easeInOut",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
        duration: 1,
      },
    },
    hidden: {
      x: 0,
      y: 0,
      opacity: 0,
      ease: "easeInOut",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <motion.h1
        className="loadingNadpis"
        variants={LoadingAnimace}
        animate="show"
        initial="hidden"
      >
        <h1>Loading</h1>
      </motion.h1>
    </div>
  );
}
