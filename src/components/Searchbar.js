import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Searchbar.css";

function Searchbar({ data, setData }) {
  const [query, setQuery] = useState(" ");

  let config = {
    headers: {
      "user-key": process.env.REACT_APP_USER_KEY,
    },
  };

  console.log(query);
  const getData = async () => {
    const url = `https://developers.zomato.com/api/v2.1/search?q=${query}&entity_id=216&entity_type=country`;

    const results = await axios

      .get(url, config)
      .then((response) => {
        const list = response.data.restaurants;
        setData(list);
        console.log(response);
        // list.map((item) => {
        //   return item.restaurant.name;
        // });
      })
      .catch((error) => {
        console.log(error);
      });

    setQuery("");
  };

  useEffect(() => {
    getData();
  }, []);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <body>
      <div>
        <form id="search-form">
          <input
            type="text"
            name=""
            id="inputBar"
            placeHolder="Search Ctiy"
            autoComplete="off"
          />

          <input
            className="search-cuisines"
            type="text"
            name="query"
            id="inputBar"
            placeholder="Search Cuisine"
            autoComplete="off"
            onChange={onChange}
            value={query}
          />
          <button
            className="search-btn"
            type="submit"
            id="getData"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </body>
  );
}

export default Searchbar;
