import React from "react";

import style from "./RentCarItem.module.css";

const RentCarItem = ({ image, title }) => {
  return (
    <div className={style.rentCar__container}>
      <img classname={style.cover} src={image} alt="rent car" />
      <span>{title}</span>
    </div>
  );
};

export default RentCarItem;
