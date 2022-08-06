import React from "react";

import style from "./MostPopular.module.css";

const MostPopular = ({ image, title, city, price, status }) => {
  return (
    <div className={style.popular__container}>
      <div className={style.popular}>
        <div className={style.popular__items}>
          <img
            src={image}
            className={style.popural__cover}
            alt="popular hotel"
          />
          <div className={style.popular__text}>
            <span>{city}</span>
            <span>{title}</span>
            <span>Starting from {price} $</span>
            <span>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
