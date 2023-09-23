"use client";

import ExampleWrapper from "@/components/example-wrapper";
import { motion } from "framer-motion";

export default function Page() {

  const code = `
  <motion.p
    initial={{ opacity: 0, y: -20, scale: 0.8 }}
    animate={{
      opacity: 1,
      transition: { duration: 0.5 },
      y: 0,
      scale: 1,
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.8, transition: { duration: 0.5 } }}
    className="z-10 w-20 h-20  relative items-center bg-yellow-500/50 text-base font-medium ring-1 ring-inset ring-yellow-500/50 cursor-pointer font-semibold"
    drag="x"
    dragConstraints={{
      left: -150,
      right: 150,
    }}
  ></motion.p>`
  return (
    <ExampleWrapper
      title="Drag with Axis Constraint"
      subtitle="Limit dragging to a single axis"
      code={code}
    >
      <motion.p
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
          y: 0,
          scale: 1,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8, transition: { duration: 0.5 } }}
        className="z-10 w-20 h-20  relative items-center bg-yellow-500/50 text-base font-medium ring-1 ring-inset ring-yellow-500/50 cursor-pointer font-semibold"
        drag="x"
        dragConstraints={{
          left: -150,
          right: 150,
        }}
      ></motion.p>
    </ExampleWrapper>
  );
}
