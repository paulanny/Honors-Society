import "./Hero.css";
import circle1 from "../Assets/maintop.png";
import circle2 from "../Assets/maintop.png";
import circle3 from "../Assets/maintop.png";
import circle4 from "../Assets/maintop.png";

const Hero = () => {
  return (
    <div className="herodiv">
      <div className="herop">
        <p className="heropone">By Scholars,</p>
        <p className="heroptwo">For Scholars</p>
      </div>
      <div className="herobtn">
        <a className="herobtnsolid">Join Society</a>
        <a className="herobtntrans">Donate</a>
      </div>
      <div className="circles">
              <img className="circle1" src={circle1} alt="circle1" />
              <img className="circle2" src={circle2} alt="circle1" />
              <img className="circle3" src={circle3} alt="circle1" />
              <img className="circle4" src={circle4} alt="circle1" />
            </div>
    </div>
  );
};

export default Hero;
