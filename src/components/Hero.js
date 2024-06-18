import "./Hero.css";
import circlehead1 from "../Assets/maintop.png";
import circlehead2 from "../Assets/maintop.png";
import circlehead3 from "../Assets/maintop.png";
import circlehead4 from "../Assets/maintop.png";

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
              <img className="circlehead1" src={circlehead1} alt="circle1" />
              <img className="circlehead2" src={circlehead2} alt="circle1" />
              <img className="circlehead3" src={circlehead3} alt="circle1" />
              <img className="circlehead4" src={circlehead4} alt="circle1" />
            </div>
    </div>
  );
};

export default Hero;
