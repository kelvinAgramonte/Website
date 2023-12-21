// pages/page.tsx (or Home.tsx)

import Banner from "@/components/Banner";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <About />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}