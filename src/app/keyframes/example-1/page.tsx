"use client";

import ExampleWrapper from "@/components/example-wrapper";
import { motion } from "framer-motion";

export default function Home() {
  const code = `
<motion.div
className="h-10 w-10 bg-white"
animate={{
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 180, 180, 0],
  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
}}
transition={{
  duration: 2,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: Infinity,
  repeatDelay: 1,
}}
/>
`;

  return (
    <ExampleWrapper
      title="Animating with Keyframes - Example 1"
      subtitle="Scale, rotation and border radius animation"
      code={code}
    >
      <motion.div
        className="h-10 w-10 bg-white"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </ExampleWrapper>
  );
}
