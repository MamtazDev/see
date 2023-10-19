import React from "react";
import STARGIRL from "../assets/STARGIRL.svg";
import MONARCH from "../assets/MONARCH.svg";
import RUTHLESS from "../assets/RUTHLESS.svg";
import STRANGER from "../assets/STRANGER THINGS.svg";
import OVAL from "../assets/THE OVAL.svg";
import Slider from "react-slick";

const SomeWork = () => {
  const works = [
    STARGIRL,
    MONARCH,
    RUTHLESS,
    STRANGER,
    OVAL,
    STARGIRL,
    MONARCH,
    RUTHLESS,
    STRANGER,
    OVAL,
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="first-slick md:pt-20 pt-10 md:pb-12 pb-6 ">
      <h1 className="text-black md:text-4xl text-3xl font-semibold pb-2 pl-16">
        SOME OF OUR WORK
      </h1>
      <div className="first-slick-inner mt-10">
        <Slider className="untern-slider1x w-full" {...settings}>
          {works.map((work, index) => (
            <div key={index}>
              <div className="techno-slide pr-16">
                <img className="w-full" src={work} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SomeWork;
