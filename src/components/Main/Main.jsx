import React from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Search from "../Search/Search";

import style from "./Main.module.css";

function Main() {
  return (
    <div className={style.main}>
      <Nav />
      <Header />
      <Search />
    </div>
  );
}

export default Main;
