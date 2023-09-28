import React from 'react'; 
import NavBar from './Components/Navbar';
import Hero from './Components/Hero';
import DearVid from './Components/DearVid';
import Affiliate from './Components/Affiliate';
import AboutUs from './Components/AboutUs';
import Goals from './Components/Goals';
import WhyJoin from './Components/WhyJoin';
import Footer from './Components/Footer';
import Divider from './Assets/honorsdivider.png';

function App() {
  return (
<div>
  <NavBar />
  <Hero />
  <div className='divider'>
    <img src={Divider} alt='dividerimage' />
  </div>
  <DearVid />
  <Affiliate />
  <AboutUs />
  <h2 className="Goalheader">Our Goals</h2>
  <div className='goalsdiv'>
  <Goals
  title="Goal One"
  description=" Our to-do list now is the website, a year calendar or plan which is
  basically a detailed plan of our activities during the first year,
  filling in leadership positions, and most importantly reaching out
  to professionals which will be based on our calendar. So I want to
  reach out to multiple foreign psychologists in different areas or
  fields to seek their exper hmm good jobtise as well."
   />
<Goals
  title="Goal Two"
  description=" Our to-do list now is the website, a year calendar or plan which is
  basically a detailed plan of our activities during the first year,
  filling in leadership positions, and most importantly reaching out
  to professionals which will be based on our calendar. So I want to
  reach out to multiple foreign psychologists in different areas or
  fields to seek their exper hmm good jobtise as well."
   />
<Goals
  title="Goal Three"
  description=" Our to-do list now is the website, a year calendar or plan which is
  basically a detailed plan of our activities during the first year,
  filling in leadership positions, and most importantly reaching out
  to professionals which will be based on our calendar. So I want to
  reach out to multiple foreign psychologists in different areas or
  fields to seek their exper hmm good jobtise as well."
   />
</div>

<h2 className="Goalheader">Why Join?</h2>
<WhyJoin />

  <Footer />
</div>
  )
   
}

export default App;
