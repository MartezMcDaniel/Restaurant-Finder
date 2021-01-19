import React, { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from './Restaurant.js'

function Restaurants({ data }) {
  return (
    <div>
      <div>
        {data.map((item) => {
          return <Restaurant item={item.restaurant}/>;
        })}
      </div>
    </div>
  );
}

export default Restaurants;
