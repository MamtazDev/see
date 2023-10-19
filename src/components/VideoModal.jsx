import React from "react";
import video from "../assets/video1.mp4";

const VideoModal = ({ closeModal }) => {
  return (
    <div className="modal" id="video-modal">
      <div className="modal-box">
        <div className="modal-header">
          <h2 className="text-xl font-semibold">Video Modal</h2>
          <button
            className="modal-close"
            onClick={closeModal}
            aria-label="Close"
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
