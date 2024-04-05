/* eslint-disable */
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestCard() {
  return (
    <div className="h-5px rounded-md flex flex-col antialiasedbg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"npm i framer-motion clsx tailwind-merge mini-svg-data-uri

      />
    
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Akshat has been on my E-Cell team for the past two years and he has done a really good job of upholding his responsibilities. He's super professional and hardworking, always on top of his responsibilities. Whenever we're up against doing something new and big, he's our go-to guy. As our vice president, he's not just a leader but also a great listener. He makes everyone feel included and important, which is such an important quality in a leader. With his exceptional skills in technologies like web development, he always strives to contribute to solving real-world problems. He is a continuous learner and this becomes his special ability to work in any field, with any team at any time.",
    name: <a href='https://www.linkedin.com/in/manishramarapu/'>Manish Sagar Ramarapu</a>,
    title: <a href='https://www.linkedin.com/in/manishramarapu/'>Founder - Padverse | President - E-Cell IARE</a>,
  },
  {
    quote: "Akshat is the most passionate and hardworking person dedicated in taking E-Cell IARE to further heights. He has good leadership qualities and team management skills which he has shown in handling the cell and representing E-Cell IARE at NEC IITB. Apart from non-technical skills akshat is great at coding as well, his recent project edocx has amazed all of us. He is proficient in many coding languages like C++, Java. He is also a great entrepreneur handling all the challenges thrown at him from time to time. I wish him the best for his future endeavors.",
    name: <a href='https://www.linkedin.com/in/kyuvraj/'>Yuvraj K</a>,
    title: <a href='https://www.linkedin.com/in/kyuvraj/'>Co-Founder Padverse | Vice - President E-Cell IARE</a>,
  },
  {
    quote:
      "Akshat is a hardworking, talented/skilled individual who works tirelessly to achieve the objectives of the team. During my time working with him at E-Cell IARE, he has demonstrated exceptional leadership qualities and utmost commitment to the growth of the group. Having seen him work on multiple startups and projects, I can vouch for his technical skills topping it off with brilliant human management skills.He also commands respect among his team members and also makes sure everyone around is equally respected and heard!",
    name:  <a href='https://www.linkedin.com/in/chaitanya-akshay-bakshi-144ab720a/'>Chaitanya Akshay Bakshi</a>,
    title: <a href='https://www.linkedin.com/in/chaitanya-akshay-bakshi-144ab720a/'>Vice-President E-CELL IARE</a>,
  },
  
];
