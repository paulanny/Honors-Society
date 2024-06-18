import "./Goals.css";
// import Testingimage from "../Assets/testimage.jpg";

const Goals = (props) => {
  return (
    <div className="allgoalsdiv">
      <div className="Goals">
        <div className="goalanimate">
          <img src={props.image} alt="ourImage" />
        </div>
        <div className="Goalstexts">
          <p className="goaltitlep">{props.title} </p>
          <p className="goalp">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
