"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Projecttitle() {
  const words = [
    {
      text: "Few",
    },
    {
      text: "Projects",
    },
    {
      text: "I",
    },
    {
      text: "have",
    },
    {
      text: "worked upon.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
