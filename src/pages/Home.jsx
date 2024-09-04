import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { Principles } from "../sections/Principles";
import { Solution } from "../sections/Solution";
// import { Faq } from "../sections/Faq";
// import { Testimonials } from "../sections/Testimonials";
import { CallToAction } from "../sections/CallToAction";
import { Footer } from "../sections/Footer";
import { Video } from "../sections/Video";

export function Home() {
  return (
    <div className="font-montserrat text-black bg-[url('/background.svg')] bg-defaultSize bg-no-repeat relative">
      <Navbar />
      <div className="max-w-[1024px] mx-auto px-5">
        <Hero />
        <Principles />
        <Solution />
        {/* <Testimonials />
        <Faq /> */}
        <Video />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}
