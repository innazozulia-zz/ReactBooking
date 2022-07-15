import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import style from "./Search.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Search() {
  const [openDate, setOpenDate] = React.useState(false);
  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = React.useState(false);
  const [options, setOptions] = React.useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
        <div
          className={style.search__item__date}
          onClick={() => setOpenDate(!openDate)}
        >
          <BsCalendar3 className={style.serach__icon} />
          <span className={style.date__text}>
            {`${format(date[0].startDate, "dd/ MM/ yyyy")} to ${format(
              date[0].endDate,
              "dd/ MM/ yyyy"
            )} `}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={style.search__date}
            />
          )}
        </div>
        <div
          className={style.search__item__room}
          onClick={() => setOpenOptions(!openOptions)}
        >
          <FaUserAlt className={style.serach__icon} />
          <span
            className={style.search__description}
          >{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
          {openOptions && (
            <div className={style.options}>
              <div className={style.option__item}>
                <span className={style.option__text}>Adult</span>
                <div className={style.option__counter}>
                  <button
                    className={style.option__count_minus}
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className={style.count__number__adult}>
                    {options.adult}
                  </span>
                  <button
                    className={style.option__count_plus}
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={style.option__item}>
                <span className={style.option__text}>Children</span>
                <div className={style.option__counter}>
                  <button
                    className={style.option__count_minus}
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className={style.count__number__children}>
                    {options.children}
                  </span>
                  <button
                    className={style.option__count_plus}
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className={style.option__item}>
                <span className={style.option__text}>Room</span>
                <div className={style.option__counter}>
                  <button
                    className={style.option__count_minus}
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className={style.count__number__room}>
                    {options.room}
                  </span>
                  <button
                    className={style.option__count_plus}
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className={style.search__btn}>Search</button>
      </div>
    </div>
  );
}

export default Search;
