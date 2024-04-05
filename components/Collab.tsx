"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Collab() {
  const words = [
    {
      text: "Let's",
    },
   
    {
      text: "Collaborate",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-80 ">
      
      <TypewriterEffect words={words} />
      
    </div>
    
  );
}
