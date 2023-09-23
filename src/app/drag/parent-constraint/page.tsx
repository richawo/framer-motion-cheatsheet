"use client";

import CardHeader from "@/components/card-header";
import ExampleWrapper from "@/components/example-wrapper";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const constraintsRef = useRef(null);
  const code = `
<div
  ref={constraintsRef}
  className="w-full h-full flex items-center justify-center gap-2"
>
  {["Good", "Morning", "Sunshine"].map((text, i) => (
    <motion.p
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        transition: { delay: i * 0.25, duration: 0.5 },
        scale: 1,
      }}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 2.5, transition: { duration: 1.5 } }}
      key={text.toLocaleLowerCase().replaceAll(" ", "-")}
      className="items-center rounded-md bg-green-500/10 px-2 py-1 text-sm text-green-400 ring-1 ring-inset ring-green-500/20 cursor-pointer font-semibold"
      drag
      dragConstraints={constraintsRef}
    >
      {text}
    </motion.p>
  ))}
</div>
  `;
  return (
    <ExampleWrapper
      title="Drag with Reference Container Constraint"
      subtitle="Limit dragging within a reference container"
      code={code}
    >
      <div
        ref={constraintsRef}
        className="w-full h-full flex items-center justify-center gap-2"
      >
        {["Good", "Morning", "Sunshine"].map((text, i) => (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              transition: { delay: i * 0.25, duration: 0.5 },
              scale: 1,
            }}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 2.5, transition: { duration: 1.5 } }}
            key={text.toLocaleLowerCase().replaceAll(" ", "-")}
            className="items-center rounded-md bg-green-500/10 px-2 py-1 text-sm text-green-400 ring-1 ring-inset ring-green-500/20 cursor-pointer font-semibold"
            drag
            dragConstraints={constraintsRef}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </ExampleWrapper>
  );
}
