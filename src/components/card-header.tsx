"use client";

import { usePathname } from "next/navigation";
import BackIcon from "./back-icon";

type props = {
  title: string;
  subtitle: string;
};

export default function CardHeader({ title, subtitle }: props) {
  const pathname = usePathname();
  return (
    <div className="bg-[#0a0a0a]/80 min-h-[3rem] items-center text-left w-full h-min flex border-b border-[#191919] text-xs">
      {pathname.length > 1 && <div className="px-3 aspect-square min-w-[3rem] border-r border-[#191919] h-full flex items-center justify-center">
        <BackIcon className="h-5 w-5" />
      </div>}
      <div className="flex flex-col py-3 px-6 gap-1">
        <p className="mr-auto">{title}</p>
        <p className="mr-auto text-white/50">{subtitle}</p>
      </div>
    </div>
  );
}
