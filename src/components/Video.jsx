import React, { useState } from "react";
import videobg from "../assets/video.svg";
import play from "../assets/play.svg";
import video from "../assets/video1.mp4";
import VideoModal from "./VideoModal";

const Video = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="video-sec md:pt-40 pt-20 flex items-center justify-center relative">
      {modalOpen ? (
        <video
          className="lg:w-[70%] "
          controls
          autoPlay={modalOpen}
          onClick={closeModal}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <img src={videobg} alt="" />
          <img
            className="absolute moda-target-btn cursor-pointer"
            onClick={openModal}
            src={play}
            alt=""
          />
        </>
      )}

      {/* {modalOpen && <VideoModal closeModal={closeModal} />} */}
    </div>
  );
};

export default Video;
