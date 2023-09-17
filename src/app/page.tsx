"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import pages from "@/data/pages";
import Link from "next/link";

export default function Home() {
  const constraintsRef = useRef(null);
  return (
    <div
      className="flex flex-wrap h-full items-center justify-center gap-4"
      ref={constraintsRef}
    >
      {pages?.drag.map((text, i) => (
        <Link href={`drag/${text}`} key={text.toLocaleLowerCase().replaceAll(" ", "-")}>
          <motion.p
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{
              opacity: 1,
              transition: { delay: i * 0.25, duration: 0.5 },
              y: 0,
              scale: 1,
            }}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 2.5, transition: { duration: 1.5 } }}
            className="items-center rounded-md bg-green-500/10 px-2 py-1 text-base font-medium text-green-400 ring-1 ring-inset ring-green-500/20 cursor-pointer font-semibold"
          >
            {text}
          </motion.p>
        </Link>
      ))}
    </div>
  );
}
