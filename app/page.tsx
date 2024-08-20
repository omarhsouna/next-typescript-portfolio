import About from "components/sections/About";
import SocialMediaLinks from "components/SocialMediaLinks";
import TypingEffect from "components/TypingEffect";
import Header from "components/layout/Header";
import Services from "components/sections/Services";
import Projects from "components/sections/Projects";
import Articles from "components/sections/Articles";
import Contacts from "components/sections/Contacts";

export default function Home() {
  return (
    <>
      <div
        className="h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/banner.jpg')`,
        }}
      >
        <Header />
        <div className="flex flex-col items-center justify-center h-full">
          <TypingEffect texts={["React.js Developer", "Freelancer", "Web Developer"]} />
          <SocialMediaLinks />
        </div>
      </div>
     <About />
      <Services />
      <Projects />
      <Articles />
     <Contacts />

    </>
  );
}
