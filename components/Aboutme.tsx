"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function Aboutme() {
  return (
    <CardContainer  className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-black dark:text-white text-center sm:text-left"
        >
          &quot; In a world where you can be anything, <span className="text-blue-500">be yourself.</span> &quot;
        </CardItem>
       
        <CardItem
        
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src="https://cdn.sanity.io/images/w0i6ovrr/production/f669e95d5ce7f6a079dd6ec68193732c3c7b218e-960x1280.jpg"
            height="600" // Adjusted height for responsiveness
            width="1000"
            className="h-60 sm:h-80 md:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mb-4 sm:mb-0 sm:mr-4"
          >
            Contact Me →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            My Resume
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
