import React, { useState, useEffect } from "react";
import axios from "axios";

function Searchbar({ data, setData }) {
  const [query, setQuery] = useState("");

  let config = {
    headers: {
      "user-key": process.env.REACT_APP_USER_KEY,
    },
  };

  const getData = async () => {
    const results = await axios
      .get(
        `https://developers.zomato.com/api/v2.1/search?q=${query}&entity_id=292&entity_type=city`,
        config
      )
      .then((response) => {
        const list = response.data.restaurants;
        console.log(list);
        setData(list);
        list.map((item) => {
          return item.restaurant.name;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // const showData = () => {
  //   console.log(data);

  //   let city = document.getElementById("inputBar").value;

  //   for (var i in data) {
  //     const element = data[i];
  //     if (element === undefined) return;
  //     console.log(element);
  //     if (element.restaurant.location.city === city) {
  //       alert(element.restaurant.location.city);
  //       return;
  //     }
  //   }
  //   alert("Not Found");
  // };

  const onSubmit = (e) => {
    e.preventdefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form id="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="inputBar"
          id="inputBar"
          placeholder="Search Restaurants"
          autoComplete="off"
          onChange={onChange}
        />
        <input
          type="button"
          // onClick={showData}
          name="submitButton"
          value="Search"
          id="getData()"
        />
      </form>
    </div>
  );
}

export default Searchbar;
