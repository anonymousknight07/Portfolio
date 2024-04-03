import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Journals() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={
            <a href={item.url}>
              {item.title}
            </a>
          }
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ imageUrl }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-black/[0.2] bg-neutral-600 dark:bg-black">
    <img src={imageUrl} alt="Skeleton Image" className="w-full h-auto object-cover" />
  </div>
);

const items = [
  {
    title: "AI TURF WARS",
    description: "The journal deals with the clash between OpenAI and Elon Musk.",
    header: <Skeleton imageUrl="/images/issue1.jpg" />, 
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-black" />,
    url: "https://drive.google.com/file/d/1JkE81WjBoa0nipZlmC71t7lvFnh4mBix/view?usp=sharing"
  },
  {
    title: "Coming Soon",
    description: "Hold onto your hats, folks! Another installment of quirkiness is making its way down the pipeline. ",
    header: <Skeleton imageUrl="/images/comingsoon.jpg" />, 
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-black" />,
    url: "/"
  },
  {
    title: "Devin",
    description: "The issue dives into DEVIN AI and it's impact on the software industry.",
    header: <Skeleton imageUrl="/images/issue3.jpg" />, 
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-black" />,
    url: "https://drive.google.com/file/d/1ORH9B5zOiRyzxmfIXGLXuq352H1MClXe/view?usp=sharing"
  },
  {
    title: "AI Impact on Indian SMEs",
    description: "This journal deals with the impact of AI on small and medium enterprises",
    header: <Skeleton imageUrl="/images/issue2.jpg" />, 
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-black" />,
    url: "https://drive.google.com/file/d/1cgYXqBFiZGlcdtcCbRGbhWt8MiuYXktL/view?usp=sharing"
  },
];
