

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Experience />
      {/* <Services /> */}
      <Service />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
