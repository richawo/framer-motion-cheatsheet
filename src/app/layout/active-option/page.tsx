"use client";

import ExampleWrapper from "@/components/example-wrapper";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [activeId, setActiveId] = useState("emoji-0");
  const code = `
  const emojis = [ "🫣", "🥹", "😄", "😁","😆", "😅", "😂", "😍", "🥳", "🥸", "😎", "😵‍💫",];
<ul className="flex flex-wrap gap-16 justify-center">
  {emojis.map((emoji, n) => (
    <li
      style={{
        position: "relative",
      }}
      key={\`emoji-\${n}\`}
      onClick={() => setActiveId(\`emoji-\${n}\`)}
    >
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.75 } }}
        className="w-full h-full text-6xl z-10 cursor-pointer relative"
      >
        {emoji}
      </motion.div>
      {activeId === \`emoji-\${n}\` && (
        <motion.div
          className="top-0 left-0 w-full h-full border-8 border-white/20 rounded-full absolute"
          layoutId="border"
          style={{ scale: 1.15 }}
        />
      )}
    </li>
  ))}
</ul>
`;
  const emojis = [
    "🫣",
    "🥹",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "😍",
    "🥳",
    "🥸",
    "😎",
    "😵‍💫",
  ];
  return (
    <ExampleWrapper
      title={"Active Option"}
      subtitle={"Animate the border transition for the selected emoji"}
      code={code}
    >
      <ul className="flex flex-wrap gap-16 justify-center">
        {emojis.map((emoji, n) => (
          <li
            style={{
              position: "relative",
            }}
            key={`emoji-${n}`}
            onClick={() => setActiveId(`emoji-${n}`)}
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.75 } }}
              className="w-full h-full text-6xl z-10 cursor-pointer relative"
            >
              {emoji}
            </motion.div>
            {activeId === `emoji-${n}` && (
              <motion.div
                className="top-0 left-0 w-full h-full border-8 border-white/20 rounded-full absolute"
                layoutId="border"
                style={{ scale: 1.15 }}
              />
            )}
          </li>
        ))}
      </ul>
    </ExampleWrapper>
  );
}
