import React from "react";
import video from "../assets/video.svg";
import play from "../assets/play.svg";

const Video = () => {
  return (
    <div className="video-sec md:pt-40 pt-20 flex items-center justify-center relative">
      <img src={video} alt="" />
      <img
        className="absolute moda-target-btn"
        target="#video-modal"
        src={play}
        alt=""
      />
    </div>
  );
};

export default Video;
