"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Test() {
  return (
    <div id="testimonials" className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-100  text-center font-sans font-bold">
        Testimonials
        </h1>
        <p></p>
        
      </div>
      <BackgroundBeams />
    </div>
  );
}
