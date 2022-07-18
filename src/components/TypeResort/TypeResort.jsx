import React from "react";

import style from "./TypeResort.module.css";

function TypeResort({ image, title, description }) {
  return (
    <>
      <div className={style.resort__item}>
        <img className={style.resort__img} src={image} alt="resort" />
        <h2 className={style.resort__type}>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

export default TypeResort;
