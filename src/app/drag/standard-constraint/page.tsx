"use client";

import CardHeader from "@/components/card-header";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [transform, setTransform] = useState<any>("");

  const handleDrag = (event: any) => {
    if (event?.target?.style?.transform) {
      setTransform(event?.target?.style?.transform);
    }
  };

  return (
    <>
      <CardHeader
        title="Drag with Hard-coded Constraints"
        subtitle="Constrain dragging within hardcoded bounds"
      />
      <div className="p-8 rounded w-full h-[50vmin] flex items-center justify-center">
        <motion.p
          onDrag={handleDrag}
          onAnimationEnd={handleDrag}
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 },
            y: 0,
            scale: 1,
          }}
          whileHover={{ scale: 1.05 }}
          whileDrag={{ scale: 2.5, transition: { duration: 1.5 } }}
          className="z-10 w-10 h-10  relative items-center rounded-full bg-green-500/50 text-base font-medium text-green-400 ring-1 ring-inset ring-green-500/50 cursor-pointer font-semibold"
          drag
          dragConstraints={{
            left: -100,
            right: 100,
            top: -100,
            bottom: 100,
          }}
        ></motion.p>
      </div>
    </>
  );
}
