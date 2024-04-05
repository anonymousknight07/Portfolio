"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function TechStack() {
  return (
    <div id="techstack" className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl mb-2 font-semibold  text-white dark:text-white ">
              My<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-500 ">
                Tech Stack
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "HTML",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/5823a3b4098681d67d2d4b54119786d7a60f5b6b-300x300.png",
    badge: "100%",
  },
  {
    name: "CSS",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/d04ff6255a8e439f0445a560678116c5c9b3e9bf-300x300.jpg",
    badge: "100%",
  },

  {
    name: "JavaScript",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/a463c894379c6c9387dd8558455931f0757f48e4-300x300.png",
    badge: "100%",
  },
  {
    name: "React",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/c40caf8427cabecfd9ba3cc6d9723232bdb0a6cc-300x300.png",
    badge: "100%",
  },
  {
    name: "NextJs",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/3c3e33986b18bc28ff699f39a7da9ce0c43db484-300x300.png",
    badge: "60%",
  },
  {
    name: "TypeScript",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/ea2780ef311c97d72df28c6cf38ca81611852c6f-300x300.png",
    badge: "100%",
  },
  {
    name: "Tailwind",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/86813ec6f948f2a2c42a33d4de6cc3d31b61ed85-300x300.png",
    badge: "100%",
  },
  {
    name: "Firebase",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/0b7899d46ad6ef993152bd88fbec044a29e2810c-300x300.png",
    badge: "75%",
  },
  {
    name: "SQL",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/21a8562e789cbd2e036c78c022e3263bb4761455-300x300.jpg",
    badge: "80%",
  },
  {
    name: "C++",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/a1f92c7003b8cf05a116a6b865c61e9bc47f29fe-300x300.jpg",
    badge: "100%",
  },
  {
    name: "Python",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/b22d6c7974e5bc64401408a546f9ef334f2e784f-300x300.jpg",
    badge: "70%",
  },
  {
    name: "Stripe",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/7f1f6a21d7eae7397c49bbfe9e049c7018ccb4d4-300x300.png",
    badge: "70%",
  },
  {
    name: "Sanity",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/0407d5ea16aa620fc599db34df3571291c31e8d1-300x300.jpg",
    badge: "100%",
  },
 
  {
    name: "Git",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/a60cea4bdc86b821497990207440fa023c6e161f-300x300.png",
    badge: "100%",
  },
  {
    name: "Vercel",
    image: "https://cdn.sanity.io/images/w0i6ovrr/production/04e2ca8b37009394e060b9b26548e7c59a14e9f7-300x300.jpg",
    badge: "80%",
  },
 
  
  
];
