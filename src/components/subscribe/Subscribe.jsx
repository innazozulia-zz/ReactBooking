import React from "react";

import style from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={style.subscribe__container}>
      <h2 className={style.subscribe__title}>Save time, save money!!!</h2>
      <p>send up and we'll send the best deals to you</p>
      <form>
        <div className={style.input__container}>
          <input
            className={style.input}
            type="text"
            placeholder="Email"
          ></input>
          <input type="checkbox"></input>
          <label className={style.checkbox} for="checkbox">
            Send me a link to get FREE Bookingg.com app
          </label>
        </div>
        <button className={style.btn}>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
