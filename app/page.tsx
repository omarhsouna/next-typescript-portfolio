import dynamic from "next/dynamic";
import About from "components/sections/About";
import SocialMediaLinks from "components/SocialMediaLinks";
import TypingEffect from "components/TypingEffect";
import Header from "components/layout/Header";
import Services from "components/sections/Services";
import Projects from "components/sections/Projects";
import Articles from "components/sections/Articles";
import Contacts from "components/sections/Contacts";
import Footer from "components/layout/Footer";

export default function Home() {
  return (
    <>
      <div
        className="h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/banner.webp')`,
        }}
      >
        <Header />
        <div className="flex flex-col items-center justify-center h-full">
          <TypingEffect
            texts={["React.js Developer", "Freelancer", "Web Developer"]}
          />
          <SocialMediaLinks />
          <a
            download="omar-hsouna-resume"
            href="/omar-hsouna-resume.pdf"
            className="max-w-fit text-xs hover:bg-yellow  text-white duration-300 ease-linear delay-0 mt-6 p-3 rounded-2xl border border-white"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
      <About />
      <Services />
      <Projects />
      <Articles />
      <Contacts />
      <Footer />
    </>
  );
}
