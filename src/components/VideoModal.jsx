import React from 'react';
import video from "../assets/video1.mp4"

const VideoModal = () => {
    return (
        <div>
            	<div class="modal-d" id="video-modal">
		<div class="modal-body-d row m-0">
			<div class="col-12 p-0">
				<button class="close-modal-d" target="#video-modal" type="button">
					<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32" part="close-icon" class="bx--modal-close__icon"><!----><!----><!----><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
				</button>
			</div>
			<div class="col-12 p-0">
				<video controls>
				  <source src={video} type="video/mp4"/>
				  Your browser does not support the video tag.
				</video>
			</div>
		</div>
	</div>
        </div>
    );
};

export default VideoModal;