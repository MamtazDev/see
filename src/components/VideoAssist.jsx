import React from 'react';
import assist from '../assets/assist.svg'

const VideoAssist = () => {
    return (
        <section className="assist-sec md:pt-40 pt-20 md:pl-16 pl-8 md:pr-40 pr-20">
		<div
			className="2xl:max-w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex flex-wrap items-start justify-between mx-auto">
			<div className="flex flex-wrap w-full items-center">
				<div className="md:w-3/5 w-full assist-content">
					<h3 className="text-black md:text-3xl text-2xl font-semibold">VIDEO ASSIST </h3>
					<p className="text-black font-normal md:text-xl text-lg mt-4 md:max-w-xl">Our experienced team
						specializes in delivering top-notch video assist solutions tailored to your
						unique needs. From dual-camera playback to live green screen keying, variable speed playback,
						and a wide range of equipment options, we have you covered.</p>
					<a href="#">
						<button className="c-btn">
							SERVICES
						</button>
					</a>
				</div>
				<div className="md:w-2/5 w-full assist-img">
					<img className="w-full" src={assist} alt=""/>
				</div>
			</div>
		</div>
	</section>

    );
};

export default VideoAssist;