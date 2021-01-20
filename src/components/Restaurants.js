import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results.js";

function Restaurants({ data }) {
  return (
    <div>
      <div>
        {data.map((item) => {
          return <Results item={item.restaurant} />;
        })}
      </div>
    </div>
  );
}

export default Restaurants;
