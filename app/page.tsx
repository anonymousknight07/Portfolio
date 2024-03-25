import { Aboutme } from "@/components/Aboutme";
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
      {/* <Experiences/>
      <Blogs />
      <Testimonals/>
      <Contact Me/> */}
      </>
      </div>
  );
}
