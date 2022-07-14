import React from "react";

import style from "./Nav.module.css";

function Nav() {
  return (
    <div className={style.navbar}>
      <div className={style.nav__container}>
        <span className={style.logo}>LOGO</span>
        <div className={style.nav__items}>
          <button className={style.register}>Register</button>
          <button className={style.login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
