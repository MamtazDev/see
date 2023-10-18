import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/client1.svg";
import client2 from "../assets/client2.svg";
import client3 from "../assets/client3.svg";
import client4 from "../assets/client4.svg";
import Slider from "react-slick";

const Gallery = () => {
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
    <Slider className="untern-slider9x w-full md:mt-28 mt-14" {...settings}>
      {clients.map((client, index) => (
        <div key={index}>
          <div className="techno-slide9x">
            <img className="w-full" src={client} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Gallery;
