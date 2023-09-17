"use client";

type props = {
  title: string;
  subtitle: string;
};

export default function CardHeader({ title, subtitle }: props) {
  return (
    <div className="bg-[#0a0a0a]/80 min-h-[3rem] py-3 px-6 items-center text-left w-full h-min flex flex-col gap-1 border-b border-[#191919] text-xs">
      <p className="mr-auto">{title}</p>
      <p className="mr-auto text-white/50">{subtitle}</p>
    </div>
  );
}
