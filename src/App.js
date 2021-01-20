import React, { useState, useEffect } from "react";
import Restaurants from "./components/Restaurants.js";
import Searchbar from "./components/Searchbar";
import "./App.css";

function App({ props }) {
  const [data, setData] = useState([]);

  return (
    <div>
      <div className="logo"></div>
      <h1 className="head">FOODIE</h1>
      <Searchbar data={data} setData={setData} />
      <Restaurants data={data} />
    </div>
  );
}

export default App;
