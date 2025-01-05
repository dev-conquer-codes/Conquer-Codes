import Image from "next/image";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import ServiceSection from "./_components/ServiceSection";
import AboutUs from "./_components/AboutUs";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>

   <HeroSection/>
   <ServiceSection/>
   <AboutUs/>
   {/* <ContactUs/> */}
   <Footer/>
   </>
  );
}
