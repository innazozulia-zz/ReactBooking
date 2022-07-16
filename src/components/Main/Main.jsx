import React from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Feature from "../Feature/Feature";

import axios from "axios";

import style from "./Main.module.css";

function Main() {
  const [featured, setFeatured] = React.useState([]);
  // const featured = [
  //   {
  //     id: 1,
  //     country: "UK",
  //     сity: "London",
  //     property: "453",
  //   },
  //   {
  //     id: 2,
  //     country: "UKjhjjkg",
  //     сity: "dddd",
  //     property: "111",
  //   },
  // ];

  React.useEffect(() => {
    axios
      .get("https://62cdc7e0066bd2b6992c3054.mockapi.io/fetured")
      .then(function (response) {
        setFeatured(response.data);
        console.log(response.data);
        console.log(featured);
      });

    // .then(function (response) {
    //   // console.log(response);
    // });

    // });
  }, []);

  return (
    <div className={style.main}>
      <Nav />
      <Header />
      <Search />

      {featured.map((obj) => (
        <Feature
          key={obj.id}
          city={obj.city}
          property={obj.property}
          country={obj.country}
        />
      ))}
      {/* {featured && <Feature id={id} city={city} property={property} />} */}
    </div>
  );
}

export default Main;
