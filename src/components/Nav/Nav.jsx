import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  return (
    <div className={style.navbar}>
      <div className={style.nav__container}>
        <Link className={style.link__logo} to="/">
          <span className={style.logo}>LOGO</span>
        </Link>
        <div className={style.nav__items}>
          <button className={style.register}>Register</button>
          <button className={style.login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
