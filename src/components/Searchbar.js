import React, {useState, useEffect} from "react";
import axios from 'axios';


function Searchbar({data, setData}) {


    let config = {
      headers: {
        "user-key": process.env.REACT_APP_USER_KEY,
      },
    };

    const restaurantData = async () => {
      const results = axios
        .get("https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&q=ramen", config)
        .then((response) => {
              const list = response.data.restaurants
              console.log(list)
              setData(list)
          list.map((item) => {
            console.log(item.restaurant.name)
          })})
        .catch((error) => {
          console.log(error);
        });
    };


    useEffect(() => {
      restaurantData();
    }, []);


    const showData = () => {
      console.log(data);

      let city = document.getElementById("inputBar").value;

      for (var i in data) {
        const element = data[i];
        if (element === undefined) return;
        console.log(element);
        if (element.restaurant.location.city === city) {
          alert(element.restaurant.location.city);
          return;
        }
      }
      alert("Not Found");
    };





  return (
    <div>
      {console.log(data)}
      <h1>Restaurant Finder</h1>
      <form id="searchBar" />
      <input
        type="text"
        name="inputBar"
        id="inputBar"
        placeholder="Search Restaurants"
      />
      <input
        type="button"
        // onClick={showData}
        name="submitButton"
        value="Show Data"
        id="showData"
      />
    </div>
  );
}

export default Searchbar;
