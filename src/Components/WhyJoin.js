import "./WhyJoin.css";
// import Testingimage from "../Assets/testimage.jpg";
import WhyIcon from "../Assets/reason1.jpeg";

const WhyJoin = (props) => {
  return (
    <div className="alljoinreasonsdiv">
      <div className="twojoins">
        <div className="Joins">
          <div className="joinanimate">
            <img src={WhyIcon} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep">Study Abroad Counseling Opportunities</p>
            <p className="Joinp">
              Exclusive sessions led by seasoned counselors from renowned
              universities in the UK, US, Canada, Australia, and Europe. -
              Personalized guidance to help members navigate their study abroad
              journeys and chart their paths to academic excellence.
            </p>
          </div>
        </div>
        <div className="Joins">
          <div className="joinanimate">
            <img src={WhyIcon} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep">
              Seminars by Professors and Doctors in Psychology and Psychiatry{" "}
            </p>
            <p className="Joinp">
              Insightful sessions led by esteemed professionals, offering a deep
              dive into the world of psychology and psychiatry. - A unique
              chance to learn from the best minds in the field and gain
              invaluable knowledge.
            </p>
          </div>
        </div>
      </div>

      <div class="verticaldiv"></div>

      <div className="twojoins">
        <div className="Joins">
          <div className="joinanimate">
            <img src={WhyIcon} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep"> Annual Research Conference</p>
            <p className="Joinp">
              A prestigious platform for members to showcase their research
              findings and engage in thought-provoking discussions. An
              opportunity to connect with peers, mentors, and professionals in
              the field, fostering academic growth.
            </p>
          </div>
        </div>
        <div className="Joins">
          <div className="joinanimate">
            <img src={WhyIcon} alt="ourImage" />
          </div>
          <div className="Jointexts">
            <p className="Jointitlep">Reason Collaboration </p>
            <p className="Joinp">
              A platform for members to share and develop their research ideas,
              fostering independent and collaborative work throughout their
              undergraduate journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
