"use client";

import ExampleWrapper from "@/components/example-wrapper";
import { motion } from "framer-motion";

export default function Home() {
  const code = `
<motion.div
layout
className="h-10 w-10"
animate={{
  borderRadius: ["0%", "50%", "0%", "50%", "0%"],
  background: [
    "#ffffff56",
    "#84f26a56",
    "#ffffff56",
    "#ff7e7e56",
    "#ffffff56",
  ],
  border: [
    "2px solid #ffffff",
    "4px solid #84f26a",
    "2px solid #ffffff",
    "4px solid #ff7e7e",
    "2px solid #ffffff",
  ],
  transform: [
    "translateX(0) scale(0.8) rotate(0deg)",
    "translateX(20px) scale(1.5) rotate(45deg)",
    "translateX(0px) scale(0.8) rotate(0deg)",
    "translateX(-20px) scale(1.5) rotate(-45deg)",
    "translateX(0px) scale(0.8) rotate(0deg)",
  ],
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
      title="Animating with Keyframes - Example 2"
      subtitle="Shape transformation, color and border animation"
      code={code}
    >
      <motion.div
        layout
        className="h-10 w-10"
        animate={{
          borderRadius: ["0%", "50%", "0%", "50%", "0%"],
          background: [
            "#ffffff56",
            "#84f26a56",
            "#ffffff56",
            "#ff7e7e56",
            "#ffffff56",
          ],
          border: [
            "2px solid #ffffff",
            "4px solid #84f26a",
            "2px solid #ffffff",
            "4px solid #ff7e7e",
            "2px solid #ffffff",
          ],
          transform: [
            "translateX(0) scale(0.8) rotate(0deg)",
            "translateX(20px) scale(1.5) rotate(45deg)",
            "translateX(0px) scale(0.8) rotate(0deg)",
            "translateX(-20px) scale(1.5) rotate(-45deg)",
            "translateX(0px) scale(0.8) rotate(0deg)",
          ],
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
