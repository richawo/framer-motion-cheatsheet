"use client";

import { usePathname } from "next/navigation";
import BackIcon from "./back-icon";
import { motion } from "framer-motion";
import { useCode } from "@/app/context/CodeContext";

type props = {
  title: string;
  subtitle: string;
};

export default function CardHeader({ title, subtitle }: props) {
  const { showCode, setShowCode } = useCode();
  const pathname = usePathname();
  return (
    <div className="bg-[#0a0a0a]/80 min-h-[3rem] items-center text-left w-full h-min flex border-b border-[#191919] text-xs">
      {pathname.length > 1 && (
        <div className="px-3 aspect-square min-w-[3rem] border-r border-[#191919] h-full flex items-center justify-center">
          <BackIcon className="h-5 w-5" />
        </div>
      )}
      <div className="flex flex-col grow py-3 px-6 gap-1">
        <p className="mr-auto">{title}</p>
        <p className="mr-auto text-white/50">{subtitle}</p>
      </div>
      {pathname.length > 1 && (
        <div className="px-3 min-w-[3rem] border-l border-[#191919] h-full flex items-center justify-center">
          <motion.button
            onClick={() => setShowCode && setShowCode(!showCode)}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
              backgroundColor: showCode
                ? "rgba(255,255,255,0.1)"
                : "rgba(255,255,255,0)",
            }}
            whileHover={{
              backgroundColor: "rgba(255,255,255,0.075)",
              transition: { duration: 0.25 },
            }}
            className="items-center rounded-full border border-[#191919] px-2 py-1 text-sm text-white"
          >
            {showCode ? "Hide" : "Show"} Code
          </motion.button>
        </div>
      )}
    </div>
  );
}
