"use client";

import ExampleWrapper from "@/components/example-wrapper";
import { motion } from "framer-motion";

export default function Page() {
  const code = `
<ExampleWrapper
title="Animating with Keyframes - Example 3"
subtitle="Multi-element animation"
code={code}
>
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
    key={\`keyframes-example-3-\${n}\`}
    layout
    className="h-1.5 w-10 absolute bg-white"
    animate={{
      transform: [
        \`translate(\${-80 + n * 40}px, 102px)\`,
        \`translate(\${-80 + n * 40}px, \${102 - n * 40}px)\`,
        \`translate(\${-80 + n * 40}px, \${102 - n * 40}px)\`,
        \`translate(\${-80 + n * 40}px, 102px)\`,
      ],
    }}
    transition={{
      duration: 7.5,
      ease: "backInOut",
      times: [0.05, 0.1, 0.65, 0.73],
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
))}
</ExampleWrapper>
))}
  `;
  return (
    <ExampleWrapper
      title="Animating with Keyframes - Example 3"
      subtitle="Multi-element animation"
      code={code}
    >
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
          className="h-1.5 w-10 absolute bg-white"
          animate={{
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
            times: [0.05, 0.1, 0.65, 0.73],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </ExampleWrapper>
  );
}
