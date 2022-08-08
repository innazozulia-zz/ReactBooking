import React from "react";
import { Routes, Route } from "react-router-dom";
import Hotel from "./components/Hotel/Hotel";
import List from "./components/List/List";
import Main from "./components/Main/Main";
import RentCar from "./components/rentCarPage/RentCar";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
        <Route path="/rentcar" element={<RentCar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
