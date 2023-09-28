import "./AboutUs.css";
import Testingimage from "../Assets/testimage.jpg";

const AboutUs = () => {
  return (
    <div className="allaboutelements">
      <div className="aboutndpics">
        <div className="abouttexts">
          <h2 className="aboutheader">About Us</h2>
          <p className="aboutp">
            Our to-do list now is the website, a year calendar or plan which is
            basically a detailed plan of our activities during the first year,
            filling in leadership positions, and most importantly reaching out
            to professionals which will be based on our calendar. So I want to
            reach out to multiple foreign psychologists in different areas or
            fields to seek their exper hmm good jobtise as well.
          </p>
          <div className="abtbtn">
            <a className="abtbtntrans">Learn More</a>
          </div>
        </div>
        <div className="ourimage">
          <img src={Testingimage} alt="ourImage" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
