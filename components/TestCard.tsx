/* eslint-disable */
"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestCard() {
  const testimonials = [
    {
      quote:
        "Akshat has been on my E-Cell team for the past two years and he has done a really good job of upholding his responsibilities. He's super professional and hardworking, always on top of his responsibilities. Whenever we're up against doing something new and big, he's our go-to guy. As our vice president, he's not just a leader but also a great listener. He makes everyone feel included and important, which is such an important quality in a leader. With his exceptional skills in technologies like web development, he always strives to contribute to solving real-world problems. He is a continuous learner and this becomes his special ability to work in any field, with any team at any time.",
      name: "Manish Sagar Ramarapu",
      title: "Founder - Padverse | President - E-Cell IARE",
    },
    {
      quote: "Akshat is the most passionate and hardworking person dedicated in taking E-Cell IARE to further heights. He has good leadership qualities and team management skills which he has shown in handling the cell and representing E-Cell IARE at NEC IITB. Apart from non-technical skills akshat is great at coding as well, his recent project edocx has amazed all of us. He is proficient in many coding languages like C++, Java. He is also a great entrepreneur handling all the challenges thrown at him from time to time. I wish him the best for his future endeavors.",
      name: "Yuvraj K",
      title: "Co-Founder Padverse | Vice - President E-Cell IARE",
    },
    {
      quote:
        "Akshat is a hardworking, talented/skilled individual who works tirelessly to achieve the objectives of the team. During my time working with him at E-Cell IARE, he has demonstrated exceptional leadership qualities and utmost commitment to the growth of the group. Having seen him work on multiple startups and projects, I can vouch for his technical skills topping it off with brilliant human management skills.He also commands respect among his team members and also makes sure everyone around is equally respected and heard!",
      name: "Chaitanya Akshay Bakshi",
      title: "Vice-President E-CELL IARE",
    },
    {
      quote:
        "I have had the distinct pleasure of working closely with Akshat as a co-founder, and I can confidently attest to his exceptional qualities as both a professional and an individual. Akshat embodies the epitome of hard work, dedication, and strategic vision, making him an invaluable asset to any team or endeavor.From the outset of our partnership, Akshat showcased an unwavering commitment to excellence. His work ethic is unparalleled, consistently going above and beyond to ensure the success of our projects. No challenge is too daunting for him; instead, he approaches each task with determination and a meticulous attention to detail. His ability to persevere through obstacles and deliver results under pressure is truly commendable.What truly sets Akshat apart is his innate talent for leadership and innovation. As a co-founder, he has played a pivotal role in shaping our company's direction and driving its growth. His strategic insights and forward-thinking mindset have been instrumental in navigating complex business landscapes and capitalizing on emerging opportunities. Moreover, Akshat fosters a collaborative environment where ideas flourish, empowering team members to contribute their best work and achieve collective success.",
      name: "Anirudh",
      title: "Co-Founder Ropha",
    },
  ];

  return (
    <div className="h-5px rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
