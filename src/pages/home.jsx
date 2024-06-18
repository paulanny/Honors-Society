import React from "react";
import NavBar from "../componentsone/Navbar";
import Hero from "../componentsone/Hero";
import DearVid from "../componentsone/DearVid";
import Affiliate from "../componentsone/Affiliate";
import AboutUs from "../componentsone/AboutUs";
import Goals from "../componentsone/Goals";
import WhyJoin from "../componentsone/WhyJoin";
import Footer from "../componentsone/Footer";
import Divider from "../Assets/honorsdivider.png";
import AcademicIcon from "../Assets/academic excellence.jpeg";
import ResearchIcon from "../Assets/researchandinnovation.jpeg";
import InterdisciplineIcon from "../Assets/interdiscipline.jpeg";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="divider">
        <img src={Divider} alt="dividerimage" />
      </div>
      <DearVid />
      <Affiliate />
      <AboutUs />
      <h2 className="Goalheader">Our Goals</h2>
      <div className="goalsdiv">
        <Goals
          image={AcademicIcon}
          title="Academic Excellence"
          description=" The Honors Society of Psychology Majors is a haven for 
          the brightest and most dedicated psychology students across Nigerian 
          universities. We aim to create an intellectual melting pot where 
          knowledge thrives, ideas flourish, and academic excellence is both
           celebrated and cultivated.
."
        />
        <Goals
          image={ResearchIcon}
          title="Practical Research and Innovation"
          description=" No longer will psychology education be confined to 
          textbooks alone. We will embark on a journey of hands-on practical 
          research, exploring uncharted territories in psychological studies.
           By pushing boundaries and embracing innovation, we will redefine the 
           boundaries of psychology education in Nigeria.
"
        />
        <Goals
          image={InterdisciplineIcon}
          title="Interdiciplinary Collaboration"
          description=" Some of the most groundbreaking discoveries occur at the 
          intersection of disciplines. The Honors Society of Psychology Majors
           will actively promote interdisciplinary collaboration, fostering 
           partnerships with students from diverse fields such as neuroscience, 
           sociology, and technology. Together, we will pioneer new approaches to 
           understanding the human mind.

"
        />
      </div>

      <h2 className="Goalheader">Why Join?</h2>
      <WhyJoin />

      <Footer />
    </div>
  );
}

export default Home;
