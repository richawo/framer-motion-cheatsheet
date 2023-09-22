"use client";

import CardHeader from "@/components/card-header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center relative">
      <CardHeader
        title="Animating with Keyframes - Example 3"
        subtitle="Multi-element animation"
      />
      <div className="p-8 rounded w-full h-[50vmin] flex items-center justify-center relative">
        <motion.div
          layout
          className="h-10 w-10 absolute bg-white"
          animate={{
            opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1, 1, 0.5],
            transform: [
              "translate(-80px, 80px) scale(1) rotate(0deg)",
              "translate(-80px, 80px) scale(1) rotate(0deg)",
              "translate(-40px, 40px) scale(1) rotate(90deg)",
              "translate(0px, 0px) scale(1) rotate(180deg)",
              "translate(40px, -40px) scale(1) rotate(270deg)",
              "translate(80px, -80px) scale(1) rotate(360deg)",
              "translate(80px, 80px) scale(1) rotate(360deg)",
              "translate(80px, 80px) scale(1) rotate(360deg)",
              "translate(-80px, 80px) scale(1) rotate(0deg)",
            ],
          }}
          transition={{
            duration: 7.5,
            ease: "backInOut",
            times: [0, 0.125, 0.25, 0.35, 0.425, 0.475, 0.55, 0.68, 0.81, 0.88],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        {[0, 1, 2, 3, 4].map((n) => (
          <motion.div
            key={`keyframes-example-3-${n}`}
            layout
            className="h-1.5 w-10 absolute"
            animate={{
              background: [
                "#ffffff",
              ],
              transform: [
                `translate(${-80 + n * 40}px, 102px)`,
                `translate(${-80 + n * 40}px, ${102 - n * 40}px)`,
                `translate(${-80 + n * 40}px, ${102 - n * 40}px)`,
                `translate(${-80 + n * 40}px, 102px)`,

              ],
            }}
            transition={{
              duration: 7.5,
              ease: "backInOut",
              times: [0.05, 0.10, 0.65, 0.73],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
