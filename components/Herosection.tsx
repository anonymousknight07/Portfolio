/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";

export function Herosection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-3 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Hi there !{" "}
          <span className="text-blue-500">
            I'm Akshat{"  "}
            <Image
              className="inline "
              src="https://cdn.sanity.io/images/w0i6ovrr/production/a5b7615fc2bc4fff7909af8a9ca42adcc3058ed0-200x245.gif"
              width="100"
              height="100"
              alt="wink"
            />
          </span>
        </div>
        <div className="font-extralight text-base md:text-4xl text-white py-4">
          A CSE student with a knack for web wizardry!
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          View my Resume
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
