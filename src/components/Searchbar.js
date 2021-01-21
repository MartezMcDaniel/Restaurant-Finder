import React, { useState, useEffect } from "react";
import axios from "axios";

function Searchbar({ data, setData }) {
  const [query, setQuery] = useState(" ");
  const [city, setCity] = useState(" ");

  let config = {
    headers: {
      "user-key": process.env.REACT_APP_USER_KEY,
    },
  };

  const getData = async () => {
    const url = `https://developers.zomato.com/api/v2.1/search?q=${query}&entity_id=292&entity_type=city`;

    // const url = `https://developers.zomato.com/api/v2.1/search?q=${query}&entity_id=216&entity_type=country`;
    // const url3 = `https://developers.zomato.com/api/v2.1/locations?query=${city}`;
    // const url4 = `https://developers.zomato.com/api/v2.1/search?entity_id=cincinnati&entity_type=city&q=${query}&count=100`;
    const results = axios

      .get(url, config)
      .then((response) => {
        let list = response.data.restaurants;
        setData(list);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setQuery("");
  };

  useEffect(() => {}, []);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div>
      <div className="wrap">
        <div className="search">
          <form id="search-form">
            {/* <input
            type="text"
            name=""
            id="inputBar"
            placeHolder="Search Ctiy"
            autoComplete="off"
            onChange={onChange2}
            value={city}
          /> */}
            <div>
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
            </div>
            <div className="btn">
              <button
                className="search-btn"
                type="submit"
                id="getData"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
