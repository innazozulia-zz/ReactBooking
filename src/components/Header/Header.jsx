import React from "react";
import { FaBed } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { Link } from "react-router-dom";

import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__list}>
          <Link className={style.link} to="/hotels">
            <div className={style.header__item}>
              <FaBed className={style.header__icon} />
              <span>Hotel</span>
            </div>
          </Link>
          <Link className={style.link} to="/flight">
            <div className={style.header__item}>
              <ImAirplane className={style.header__icon} />
              <span>Flight</span>
            </div>
          </Link>

          <Link className={style.link} to="/rentcar">
            <div className={style.header__item}>
              <AiFillCar className={style.header__icon} />
              <span>Rent Car</span>
            </div>
          </Link>
          <Link className={style.link} to="/transfer">
            <div className={style.header__item}>
              <FaTaxi className={style.header__icon} />
              <span>Transfer</span>
            </div>
          </Link>
        </div>
        <div>
          <h1 className={style.header__title}>Find your next stay</h1>
          <p className={style.header__description}>
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
