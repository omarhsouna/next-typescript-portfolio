import Header from "components/layout/Header";

export default function Home() {
  return (
    <>
      <div
        className="w-screen h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/images/banner.jpg')`,
        }}
      >
        <Header />
      </div>
      <section className="section h-screen" id="about">1</section>
      <section className="section h-screen" id="services">2</section>
      <section className="section h-screen" id="portfolio">3</section>
      <section className="section h-screen" id="blog">4</section>
      <section className="section h-screen" id="contacts">5</section>

    </>
  );
}
