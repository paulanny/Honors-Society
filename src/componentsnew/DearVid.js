import React, { useState } from "react";
import TypeEffect from "./TypeWriterEffect";
import "./DearVid.css";
// import video from '../Assets/testvid.mp4'

const DearVid = () => {
  const videoPath = process.env.PUBLIC_URL + "/Assets/testvid.mp4";

  return (
    <div className="textviddiv">
      <div className="psychestudents">
        <p className="dearp">
          Dear Psyche Students,
          <br />
          <br />
          When you become a part of the Psychology Honors Society, you're not
          just joining a group; you're embracing a commitment to excellence and
          shared vision. As a member, you're required to meet and maintain a
          CGPA requirement of 3.5-5.0/4.0 and to actively engage as an executive
          member. We also require you to contribute to our collective success by
          covering a 7,000 naira joining fee and 5,000 naira dues, paid thrice a
          year. These financial commitments will fuel our initiatives, from
          dynamic events to groundbreaking research and the acquisition of
          essential software tools.
        </p>
      </div>
      <div>
        <h1>Video Example</h1>
        <video controls>
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default DearVid;
