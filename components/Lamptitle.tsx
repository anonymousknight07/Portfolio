"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import SocialMediaIcons from "./Socialmedia";



export function Lamptitle() {
  return (
    <div id="social">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
        <span className="text-white mt-2">Have more questions?</span> <br /> <span className="text-blue-600">Reach out to me on my socials</span>
        </motion.h1>
      

        <SocialMediaIcons/>
      </LampContainer>
      
  
     
    </div>
  );
}
