import React, { useState, useEffect } from "react";
import Restaurants from "./components/Restaurants.js";
import Searchbar from "./components/Searchbar";
import "./App.css";

function App({ props }) {
  const [data, setData] = useState([]);

  return (
    <div>
      <section className="header">
        <div className="logo"></div>
        <h1 className="title">Restaurant Finder</h1>
      </section>
      <Searchbar data={data} setData={setData} />
      <Restaurants data={data} />
    </div>
  );
}

export default App;
