"use client";

import ExampleWrapper from "@/components/example-wrapper";
import { motion } from "framer-motion";

export default function Home() {
  const code = `
<svg
  width="75"
  height="52"
  viewBox="0 0 75 52"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <motion.path
    d="M4.13333 24.9334L27.2333 48.0334L70.8667 4.40002"
    stroke="white"
    stroke-width="5.13333"
    stroke-linecap="square"
    initial={{ pathLength: 0, pathOffset: 1 }}
    animate={{ pathLength: 1, pathOffset: 0 }}
    transition={{ duration: 0.5 }}
  />
</svg>  
`;
  return (
    <ExampleWrapper
      title="Path Animation"
      subtitle="Animate svg path drawing"
      code={code}
    >
      <svg
        width="75"
        height="52"
        viewBox="0 0 75 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M4.13333 24.9334L27.2333 48.0334L70.8667 4.40002"
          stroke="white"
          stroke-width="5.13333"
          stroke-linecap="square"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </ExampleWrapper>
  );
}
