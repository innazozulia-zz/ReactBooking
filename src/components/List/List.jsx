import React from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";

import style from "./List.module.css";

function List() {
  return (
    <div>
      <Nav />
      <Header />
      <div className={style.hotel__container}></div>
    </div>
  );
}

export default List;
