"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export function Projects() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-11">
      <PinContainer
        title="/proscenium.vercel.app"
        href="https://proscenium.vercel.app/" 
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com/anonymousknight07/Edoc_X_Proscenium">
              <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  width={50} height={50} alt="GitHub Logo" />
            </a>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://github.com/ui.aceternity.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com">
            <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  width={50} height={50} alt="GitHub Logo" />
            </a>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://github.com/ui.aceternity.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com">
            <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  width={50} height={50} alt="GitHub Logo" />
            </a>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://github.com/ui.aceternity.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com">
            <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  width={50} height={50} alt="GitHub Logo" />
            </a>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
