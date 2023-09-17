"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center relative">
      <div className="absolute -top-0 gap-4 flex flex-col w-full items-center ">
        <p className="bg-white/10 px-2 py-1 text-white/80 rounded-md">{"Can only drag horizontally"}</p>
        <hr className="border-white/20 w-full" />
      </div>
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
    </div>
  );
}
