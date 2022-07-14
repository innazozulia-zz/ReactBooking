import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import style from "./Search.module.css";

function Search() {
  return (
    <div className={style.search__container}>
      <div className={style.search__list}>
        <div className={style.search__item}>
          <MdTravelExplore className={style.serach__icon} />
          <input
            type="text"
            placeholder="Where are you going?"
            className={style.search__input_place}
          ></input>
        </div>
        <div className={style.search__item}>
          <BsCalendar3 className={style.serach__icon} />
          <span>date</span>
        </div>
        <div className={style.search__item}>
          <FaUserAlt className={style.serach__icon} />
          <span>2 adults 0 childer 1 room</span>
        </div>
        <button className={style.search__btn}>Search</button>
      </div>
    </div>
  );
}

export default Search;
