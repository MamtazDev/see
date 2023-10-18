import React from "react";
import star from "../assets/star.svg";
import cc from "../assets/cc.svg";
import Slider from "react-slick";

const Reviews = () => {
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
    <section className="first-slick seventh-slick md:pt-20 pt-10">
      <h1 className="text-black md:text-4xl text-3xl font-semibold pb-2 pl-16">
        REVIEWS
      </h1>
      <div className="slick-seven-bg md:mt-28 mt-14">
        <div className="untern-slider7x w-full relative z-10">
          <Slider className="untern-slider4x w-full" {...settings}>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index}>
                <div className="techno-slide7x">
                  <div className="profile">
                    <h6>David Hazboro</h6>
                    <p>We had such a great experience!</p>
                  </div>
                  <div className="rating">
                    <img src={cc} alt="" />
                    <div className="star">
                      {[1, 2, 3, 4, 5.6,7,8].map((index) => (
                        <img key={index} src={star} alt="" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
