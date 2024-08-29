import Image from "next/image";

const About = () => {
  return (
    <section className="section bg-white py-10 lg:py-[120px]" id="about">
      <div className="lg:max-w-screen-xl mx-auto flex flex-col items-center lg:flex-row lg:gap-10 px-6">
        <div className="min-w-[200px] lg:max-w-[360px]">
          <Image
            src="/images/profile.webp"
            width={800}
            height={800}
            alt="Picture of the author"
            className="z-0 object-cover bg-center"
          />
        </div>
        <div>
          <h1 className="lg:my-7 lg:text-[44px] leading-[56px] text-title font-kaushan">
            Hi my name is Omar Hsouna,
            <br />
            Senior React.js, Next.js Developer & Freelancer
            <br />
            from Tunisia, Korba.
          </h1>
          <p className="my-6 text-base font-light leading-7 text-gris-link">
            I’m a senior frontend developer with five years of experience in
            React.js, passionate about creating clean, high-performance code. My
            goal is to build websites with excellent UX while meeting project
            deadlines and using cutting-edge technologies.
          </p>
          <a
            download="omar-hsouna-resume"
            href="/omar-hsouna-resume.pdf"
            className="max-w-fit text-xs hover:shadow-hover-link shadow-active-link text-black duration-300 ease-linear delay-0"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
