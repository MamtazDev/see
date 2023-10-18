import React from "react";
import cam from "../assets/cam.png";
import Slider from "react-slick";

const Blog = () => {
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
    <section className="first-slick eighth-slick md:pt-40 pt-20">
      <h1 className="text-black md:text-4xl text-3xl font-semibold pb-2 pl-16">
        CHECK OUT OUR BLOG
      </h1>
      <div className="untern-slider8x w-full mt-20">
        <Slider className="untern-slider4x w-full" {...settings}>
          {[1, 2, 3, 4].map((index) => (
            <div key={index}>
              <div className="techno-slide8x mr-10">
                <img src={cam} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <a href="#">
        <button className="c-btn">Blog</button>
      </a>
    </section>
  );
};

export default Blog;
