"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { pages } from "@/data/pages";
import Link from "next/link";
import CardHeader from "@/components/card-header";

export default function Home() {
  const constraintsRef = useRef(null);
  return (
    <>
      <CardHeader
        title="Get Started 👋"
        subtitle="Select to view examples for the following animations"
      />
      <div className="p-8 rounded w-full h-[50vmin] box">
        <div
          className="flex flex-wrap h-full items-center justify-center gap-4 content-center"
          ref={constraintsRef}
        >
          {Object.keys(pages).map((section: string) =>
            (pages as any)[section]?.map((text: string, i: number) => (
              <Link
                href={`${section}/${text}`}
                key={text.toLocaleLowerCase().replaceAll(" ", "-")}
              >
                <motion.button
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5 },
                    y: 0,
                    scale: 1,
                    backgroundColor: "rgba(255,255,255,0)",
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.075)",
                    transition: { duration: 0.25 },
                  }}
                  className="items-center rounded-full border border-[#191919] px-2 py-1 text-sm text-white"
                >
                  {`${section} / ${text}`}
                </motion.button>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}