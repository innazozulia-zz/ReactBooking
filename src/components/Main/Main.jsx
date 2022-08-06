import React from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Feature from "../Feature/Feature";
import TypeResort from "../TypeResort/TypeResort";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MostPopular from "../mostPopular/MostPopular";
import axios from "axios";

import style from "./Main.module.css";

function Main() {
  const [featured, setFeatured] = React.useState([]);
  const [resorts, setResort] = React.useState([]);
  const [mostPopular, setMostPopular] = React.useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  React.useEffect(() => {
    axios
      .get("https://62cdc7e0066bd2b6992c3054.mockapi.io/fetured")
      .then(function (response) {
        setFeatured(response.data);
      });
    // axios
    //   .get("https://62cdc7e0066bd2b6992c3054.mockapi.io/resorts")
    //   .then(function (response) {
    //     setResort(response.data);
    //     console.log(response.data);
    //   });
  }, []);

  React.useEffect(() => {
    axios
      .get("https://62cdc7e0066bd2b6992c3054.mockapi.io/resorts")
      .then(function (response) {
        setResort(response.data);
        console.log(response.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get("https://62cdc7e0066bd2b6992c3054.mockapi.io/mostPopular")
      .then(function (response) {
        setMostPopular(response.data);
        console.log(response.data);
      });
  });

  return (
    <div className={style.main}>
      <Nav />
      <Header />
      <Search />
      <div className={style.main__container}>
        {featured.map((obj) => (
          <Feature
            key={obj.id}
            image={obj.image}
            property={obj.property}
            country={obj.country}
          />
        ))}
        <h2 className={style.title}>Browse by property type</h2>
        <div className={style.resort___container}>
          {resorts.map((resort) => (
            <TypeResort
              key={resort.id}
              image={resort.image}
              title={resort.title}
              description={resort.description}
            />
          ))}
        </div>
      </div>
      <div className={style.mostPopular__container}>
        <h2>Most Popular Hotels</h2>
        <Slider {...settings}>
          {mostPopular.map((hotel) => (
            <MostPopular
              key={hotel.id}
              image={hotel.image}
              title={hotel.title}
              city={hotel.city}
              price={hotel.price}
              status={hotel.status}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Main;
