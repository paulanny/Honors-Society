import "./AboutUs.css";
import Testingimage from "../Assets/Psych Honors Images/aboutimage.JPG";

const AboutUs = () => {
  return (
    <div className="allaboutelements">
      <div className="aboutndpics">
        <div className="abouttexts">
          <h2 className="aboutheader">About Us</h2>
          <p className="aboutp">
            Honors Society of Psychology Majors, a groundbreaking initiative
            designed to revolutionize the landscape of psychology education in
            Nigeria. As dedicated psychology students, we have recognized the
            need for a community that celebrates academic excellence, fosters
            practical research, encourages interdisciplinary collaboration, and
            provides invaluable guidance for international study opportunities.
            The Honors Society of Psychology Majors is here to fill that void
            and pave the way for a new era of excellence in our field.
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
