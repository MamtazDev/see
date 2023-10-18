import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import Slider from "react-slick";

const FollowUs = () => {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client1,
    client2,
    client3,
    client4,
    client1,
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <section className="first-slick ninth-slick md:pt-28 pt-14">
      <h1 className="text-black md:text-4xl text-3xl font-semibold pb-2 pl-16">
        FOLLOW US AT @SEEPROSERVICES
      </h1>

      <Slider className="untern-slider9x w-full md:mt-28 mt-14" {...settings}>
        {clients.map((client, index) => (
          <div key={index}>
            <div className="techno-slide9x">
              <img className="w-full" src={client} alt="" />
            </div>
          </div>
        ))}
      </Slider>
      <button className="top-btn">Back to top </button>
    </section>
  );
};

export default FollowUs;
