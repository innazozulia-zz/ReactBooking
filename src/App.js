import { Routes, Route } from "react-router-dom";
import Hotel from "./components/Hotel/Hotel";
import List from "./components/List/List";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
