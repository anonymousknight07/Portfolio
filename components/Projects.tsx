"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export function Projects() {
  return (
    <div className="w-full  flex flex-wrap justify-center gap-11">
      <PinContainer
        title="Click on the name to visit the site"
        href="https://proscenium.vercel.app/" 
        className="border-blue-500"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-blue-500">
            <a href="https://proscenium.vercel.app/">Proscenium </a> 
          </h2>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com/anonymousknight07/Edoc_X_Proscenium">
              <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  className="mt-3 mb-2"width={40} height={40} alt="GitHub Logo" />
            </a>
            <p className="text-sm">Proscenium acts as a stage for seamless communication.</p>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " />
          <Image
            src="/images/proscenium.jpg" 
            alt="proscenium"
            layout="responsive"
            width={300} 
            height={300} 
            className="rounded-lg"
  />
        </div>
      </PinContainer>


            <PinContainer
            title="/lms-akshat-wd.vercel.app/"
            href="https://lms-akshat-wd.vercel.app/" 
            className="border-blue-500"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-blue-500">
                <a href="https://lms-akshat-wd.vercel.app/">LMS </a> 
              </h2>
              <div className="text-base !m-0 !p-0 font-normal">
                <a href="https://github.com/anonymousknight07/LMS">
                  <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  className="mt-3 mb-2"width={40} height={40} alt="GitHub Logo" />
                </a>
                <p className="text-sm">It provides a digital platform for course administration and management.</p>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 " />
              <Image
                src="/images/Learny.jpg" 
                alt="Learny"
                layout="responsive"
                width={300} 
                height={300} 
                className="rounded-lg"
      />
            </div>
          </PinContainer>


          <PinContainer
        title="/todo-app-tgmg.onrender.com"
        href="https://todo-app-tgmg.onrender.com/" 
        className="border-blue-500"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-blue-500">
            <a href="https://todo-app-tgmg.onrender.com/">Todo list</a> 
          </h2>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com/anonymousknight07/Todo_app">
              <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  className="mt-3 mb-2"width={40} height={40} alt="GitHub Logo" />
            </a>
            <p className="text-sm">The Todo list offers users a simple and intuitive way to organize tasks, set priorities, and track progress.</p>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " />
          <Image
            src="/images/todolist.jpg" 
            alt="Todo"
            layout="responsive"
            width={300} 
            height={300} 
            className="rounded-lg"
  />
        </div>
      </PinContainer>
      <PinContainer
        title="/edocxv2.vercel.app"
        href="https://edocxv2.vercel.app/" 
        className="border-blue-500"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-blue-500">
            <a href="https://edocxv2.vercel.app/">Edoc X V-2 </a> 
          </h2>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com/anonymousknight07/Edoc-X-">
              <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  className="mt-3 mb-2"width={40} height={40} alt="GitHub Logo" />
            </a>
            <p className="text-sm">A chatbot to answer the questions of the user.</p>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " />
          <Image
            src="/images/edocx.jpg" 
            alt="Edocx"
            layout="responsive"
            width={300} 
            height={300} 
            className="rounded-lg"
  />
        </div>
      </PinContainer>
      <PinContainer
        title="/vocal-akp07.netlify.app/"
        href="https://vocal-akp07.netlify.app/" 
        className="border-blue-500"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h2 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-blue-500">
            <a href="https://vocal-akp07.netlify.app/">Vocal </a> 
          </h2>
          <div className="text-base !m-0 !p-0 font-normal">
            <a href="https://github.com/anonymousknight07/Project-1-Music-app">
              <Image src="https://cdn.sanity.io/images/w0i6ovrr/production/7aa95f821e7d63d07eeb80a3dd5086d727ec86c8-50x50.png"  className="mt-3 mb-2"width={40} height={40} alt="GitHub Logo" />
            </a>
            <p className="text-sm">A chatbot to answer the questions of the user.</p>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " />
          <Image
            src="/images/vocal.jpg" 
            alt="Vocal"
            layout="responsive"
            width={300} 
            height={300} 
            className="rounded-lg"
  />
        </div>
      </PinContainer>
    </div>
  );
}
