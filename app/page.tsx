import About from "components/sections/About";
import SocialMediaLinks from "components/SocialMediaLinks";
import TypingEffect from "components/TypingEffect";
import Header from "components/layout/Header";

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
      <section className="section h-screen" id="services">2</section>
      <section className="section h-screen" id="portfolio">3</section>
      <section className="section h-screen" id="blog">4</section>
      <section className="section h-screen" id="contacts">5</section>

    </>
  );
}
