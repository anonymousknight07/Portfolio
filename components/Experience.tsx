/* eslint no-use-before-define: 0 */
"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Experience() {
  return (
    <TracingBeam className="px-6">
      <div id="experience" className="max-w-2xl mx-auto antialiased pt-8 pb-4 relative">
        <h1 className="text-4xl md:text-[6rem] text-center font-bold mb-10 leading-none">
          Experience
        </h1><br></br>
        {Content.map((item, index) => (
          <div key={`content-${index}`} className="flex items-start mb-10">
            {/* Image */}
            {item?.image && (
              <div className="mr-9">
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="400" // Adjust the height as needed
                  width="400" // Adjust the width as needed
                  className="rounded-lg mb-4 object-cover"
                />
              </div>
            )}
            {/* Content */}
            <div className="text-sm prose prose-sm dark:prose-invert">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 text-center md:text-left">
                {item.badge}
              </h2>
              <p className="text-xl mb-4 text-center md:text-left">
                {item.title}
              </p>
              <div className="text-center md:text-left">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const Content = [
  {
    title: "Entrepreneurship Club",
    description: (
      <>
        <p>President</p><br></br>
        <p>
          As the President of E-CELL, I am responsible for driving the
          organization &apos;s growth and success. My role involves overseeing and
          managing the day-to-day operations, ensuring the smooth functioning
          of various teams, and spearheading strategic initiatives that promote
          entrepreneurship and innovation.
          <br />
          In this position, I work closely with teammembers to develop and 
          implement long-term plans that align with the organization&apos;s goals 
          and vision. I am constantly looking for
          opportunities to expand our reach, enhance our brand, and build
          strong relationships with our stakeholders, including investors,
          mentors, and entrepreneurs.
        </p>
      </>
    ),
    badge: "March 2024-Present",
    image:
      "https://cdn.sanity.io/images/w0i6ovrr/production/db39c2c7488e7911b800e26a08d693455e0d7b41-640x640.png",
  },
  {
    title: "Micosoft",
    description: (
      <>
        <p>Microsoft StartUps Founders Hub</p><br></br>
        <p>
          The Microsoft Startup Founders Hub acts as a thriving ecosystem where
          our startup can connect with like-minded entrepreneurs, fellow
          startups, and established companies in various industries. This
          exposure to a diverse network helps us forge strategic partnerships,
          explore potential collaborations, and gain insights into market trends
          and emerging technologies.
        </p>
      </>
    ),
    badge: "JUNE 2023 - Present ",
    image:
      "https://cdn.sanity.io/images/w0i6ovrr/production/4a595733314f97a197d1abd9499466bf03f80016-3840x2160.png",
  },

  {
    title: "IIT Bombay",
    description: (
      <>
      <p>Executive</p><br></br>
        <p>
          E-Cell IIT Bombay&apos;s Campus Executive program is an endeavour to
          bring out the latent entrepreneurial spirit of young students from
          all around the Globe. It is also an internship opportunity for
          students looking to explore entrepreneurship and develop skills
          related to it.
        </p>
      </>
    ),
    badge: "July 2023 - Jan 2024",
    image:
      "https://cdn.sanity.io/images/w0i6ovrr/production/194bf9b1df33293fdd44278f02c818c9fa1d51b4-215x215.jpg",
  },
  {
    title: "Wission Talks",
    description: (
      <>
      <p>Operation Intern</p><br></br>
        <p>
          The main motive of Wission Talks is to find & develop the sense of
          purpose among youth with motivational and inspiring talks by eminent
          personalities. These incredible personalities are people who have
          started their journey with a vision to make a difference in the
          society and create an impact with their work.
        </p>
      </>
    ),
    badge: "April 2023 - Jan 2024",
    image:
      "https://cdn.sanity.io/images/w0i6ovrr/production/5adf27d7d6ff98e8047cbecc0a8204606a757d4b-225x225.png",
  },
];
