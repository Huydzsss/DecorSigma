import React from "react";
import Header from "./Header";
import Slide from "./Slide";
import AboutH from "./AboutH";
import Service from "./Service";
import Fprojects from "./Fprojects";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Footer from "./Footer";



export default function Home() {
  return (
    <div className=" bg-dark">
     <div>
  {/* Background header */}
 
  {/* Background header */}
  {/* Background footer */}
  <div className="footer-background bg-image" data-image-src="assets/img/background/b1.jpg" />
  {/* Background footer */}
  {/* content line */}
  <div className="container ps-1 pe-1 y-line" />
  {/* /content line */}
  {/* Scroll to top */}
  <a href="#" className="scroll-top active"><i className="bi bi-arrow-up-short" /></a>
</div>

      <Header />
      <Slide/>
      <AboutH/>
      <Service/>
      <Fprojects/>
      <Testimonials/>
      <Blog/>
      <Footer/>
    </div>
  );
} 