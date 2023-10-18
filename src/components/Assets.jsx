import React from 'react';
import visual from "../assets/visual.svg"

const Assets = () => {
    return (
        <section className="assets-sec md:py-12 py-6">
		<div
			className="max-w-full flex flex-wrap items-start justify-between mx-auto">
			<div className="w-full flex flex-wrap assets-col">
				<div className="md:w-2/5 w-full assets-inner1x relative">
					<img className="w-full" src={visual} alt=""/>
				</div>
				<div className="md:w-3/5 w-full assets-inner2x">
					<div className="vid-col flex items-center md:gap-12 gap-6 justify-between flex-wrap">
						<a href="#" className="vid-inner flex items-center justify-center text-center p-4 w-2/5">
							<div>
								<p className="md:text-3xl text-2xl font-semibold">VIDEO ASSIST</p>
							</div>
						</a>
						<a href="#" className="vid-inner vid-inner2x flex items-center justify-center text-center p-4 w-2/5">
							<div >
								<p className="md:text-3xl text-2xl font-semibold">TELEPROMPTER</p>
							</div>
						</a>
						<a href="#" className="vid-inner vid-inner3x flex items-center justify-center text-center p-4 w-2/5">
							<div >
								<p className="md:text-3xl text-2xl font-semibold">STAGE</p>
							</div>
						</a>
						<a href="#" className="vid-inner vid-inner4x flex items-center justify-center text-center p-4 w-2/5">
							<div >
								<p className="md:text-3xl text-2xl font-semibold">CAMERA RENTAL</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Assets;