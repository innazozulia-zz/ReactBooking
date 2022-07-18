import React from "react";

import style from "./Feature.module.css";

function Feature({ property, country, image }) {
  return (
    <div className={style.featured__container}>
      <div className={style.featured}>
        <div className={style.featured__item}>
          <img src={image} className={style.featured__img} alt="country" />
          <span className={style.featured__title}>
            <h1>{country}</h1>
            <h1>{property} properties</h1>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Feature;
