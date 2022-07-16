import React from "react";

import style from "./Feature.module.css";

function Feature({ city, property, country }) {
  return (
    <div className={style.featured__container}>
      <div className={style.featured}>
        <div className={style.featured__item}>
          <img
            src="img/item-1.jpeg"
            alt="country"
            className={style.featured__img}
          />
          <span className={style.featured__title}>
            <h1>{city}</h1>
            <h2>{country}</h2>
            <h1>{property} properties</h1>
          </span>
        </div>
        {/* <div className={style.featured__item}>
          <img
            src="img/item-1.jpeg"
            alt="country"
            className={style.featured__img}
          />
          <span className={style.featured__title}>
            <h1>London</h1>
            <h1>23 properties</h1>
          </span>
        </div>
        <div className={style.featured__item}>
          <img
            src="img/item-1.jpeg"
            alt="country"
            className={style.featured__img}
          />
          <span className={style.featured__title}>
            <h1>London</h1>
            <h1>23 properties</h1>
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Feature;
