import React from "react";
import { MdCheckCircle } from "react-icons/md";
import style from "./MostPopular.module.css";

const MostPopular = ({ image, title, city, price, status }) => {
  return (
    <div className={style.popular__container}>
      <div className={style.popular__items}>
        <img src={image} className={style.popural__cover} alt="popular hotel" />
        <div className={style.popular__text}>
          <span className={style.city}>{city}</span>
          <span className={style.title}>{title}</span>
          <span className={style.price}>Starting from {price} $</span>
          <span className={style.status}>
            <MdCheckCircle className={style.icon} />
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
