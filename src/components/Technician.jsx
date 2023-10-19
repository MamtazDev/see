import React from "react";
import girl from "../assets/smilegirl.svg";
import Slider from "react-slick";

const Technician = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="assist-sec md:pt-40 pt-20 md:pl-16 pl-8 md:pr-40 pr-20">
      <div className="2xl:max-w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex flex-wrap items-start justify-between mx-auto">
        <div className="flex flex-wrap  w-full items-center">
          <div className="md:w-3/5 w-full assist-content">
            <h3 className="text-black md:text-3xl text-2xl font-semibold">
              MEET OUR TECHNICIANS
            </h3>
            <p className="text-black font-normal md:text-xl text-lg mt-4 md:max-w-xl">
              We understand the importance of delivering flawless presentations,
              speeches, and on-camera performances. Our Teleprompter solutions
              are designed to help you deliver your content with confidence,
              precision, and professionalism. With our state-of-the-art
              equipment and experienced operators, we ensure smooth scrolling of
              script and prompt delivery of lines, allowing you to maintain eye
              contact with your audience and deliver your message flawlessly.
            </p>
            <a href="#">
              <button className="c-btn">SERVICES</button>
            </a>
          </div>
          <div className="md:w-2/5 w-full assist-img3x fourth-slick">
            <Slider className="untern-slider4x w-full" {...settings}>
              {[1, 2, 3].map((index) => (
                <div key={index}>
                  <div className="techno-slide4x">
                    <img className="w-full" src={girl} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technician;
