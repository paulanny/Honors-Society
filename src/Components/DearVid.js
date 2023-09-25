import React, { useState } from "react";
import TypeEffect from "./TypeWriterEffect";
import "./DearVid.css";
// import video from '../Assets/testvid.mp4'

const DearVid = () => {
    const videoPath = process.env.PUBLIC_URL + '/Assets/testvid.mp4';

  return (
    <div>
      <div className="psychestudents">
        <p className="dearp">
          <TypeEffect text="Dear Psyche Students" delay={300} />
        </p>
      </div>
      <h1>Video Example</h1>
      <video controls>
      <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DearVid;
