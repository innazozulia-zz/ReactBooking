import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rentCar from "../../assets/rentCar";
import Nav from "../Nav/Nav";
import style from "./RentCar.module.css";
import RentCarItem from "./rentCarItem/RentCarItem";
import Header from "../Header/Header";

const RentCar = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Nav />
      <Header />
      <div className={style.rentCar__container}>
        <Slider {...settings}>
          {rentCar.map((car) => (
            <RentCarItem key={car.id} image={car.image} title={car.title} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default RentCar;
