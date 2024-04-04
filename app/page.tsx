import { Aboutme } from "@/components/Aboutme";
import { Experience } from "@/components/Experience";
import { Herosection } from "@/components/Herosection";
import { Projects } from "@/components/Projects";
import { Projecttitle } from "@/components/Projecttitle";
import { TechStack } from "@/components/TechStack";
import { Test } from "@/components/Test";
import { TestCard } from "@/components/TestCard";

import { Journals } from "@/components/journals";
import { JournalTitle } from "@/components/journaltitle";


export default function Home() {
  return (
    <div>
      <>
      {/* <Navbar /> */}
      <Herosection />
      <Aboutme/>
      <TechStack/>
      <Experience />
      <Projecttitle />
      <Projects />
      <JournalTitle/>
      <Journals/>
      <Test/>
      <TestCard/>
      {/* <Contact Me/> */}
      </>
      </div>
  );
}
