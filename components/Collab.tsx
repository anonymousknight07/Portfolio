"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Collab() {
  const words = [
    {
      text: "Have ",
    },
    {
      text: "ideas ?",
    },
    {
      text: "Let's",
    },
    {
      text: "Collaborate ",
    },
    {
      text: "and",
    },
    {
      text: "work",
    },
   
    {
      text: "together",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-80 ">
      
      <TypewriterEffect words={words} />
      
    </div>
    
  );
}
