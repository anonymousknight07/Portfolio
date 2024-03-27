import { Aboutme } from "@/components/Aboutme";
import { Experience } from "@/components/Experience";
import { Herosection } from "@/components/Herosection";
import { TechStack } from "@/components/TechStack";


export default function Home() {
  return (
    <div>
      <>
      {/* <Navbar /> */}
      <Herosection />
      <Aboutme/>
      <TechStack/>
      <Experience />
      {/* <Blogs />
      <Testimonals/>
      <Contact Me/> */}
      </>
      </div>
  );
}
