import "./WhyJoin.css";
import Testingimage from "../Assets/testimage.jpg";

const WhyJoin = (props) => {
  return (
    <div className="alljoinreasonsdiv">
      <div className="twojoins">
        <div className="Joins">
          <div className="joinanimate">
            <img src={Testingimage} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep">Reason One </p>
            <p className="Joinp">
              Our to-do list now is the website, a year calendar or plan which
              is basically a detailed plan of our activities during the first
              year
            </p>
          </div>
        </div>
        <div className="Joins">
          <div className="joinanimate">
            <img src={Testingimage} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep">Reason Two </p>
            <p className="Joinp">
              Our to-do list now is the website, a year calendar or plan which
              is basically a detailed plan of our activities during the first
              year
            </p>
          </div>
        </div>
      </div>

      <div class="verticaldiv"></div>

      <div className="twojoins">
        <div className="Joins">
          <div className="joinanimate">
            <img src={Testingimage} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep">Reason Three </p>
            <p className="Joinp">
              Our to-do list now is the website, a year calendar or plan which
              is basically a detailed plan of our activities during the first
              year
            </p>
          </div>
        </div>
        <div className="Joins">
          <div className="joinanimate">
            <img src={Testingimage} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep">Reason Four </p>
            <p className="Joinp">
              Our to-do list now is the website, a year calendar or plan which
              is basically a detailed plan of our activities during the first
              year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
