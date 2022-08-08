import React from "react";

import style from "./Connect.module.css";

const Connect = ({ image }) => {
  return (
    <div className={style.connect__item}>
      <img className={style.cover} src={image} alt="connect people" />
      Connect
    </div>
  );
};

export default Connect;
