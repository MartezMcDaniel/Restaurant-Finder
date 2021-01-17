import React, {useState} from "react";
import axios from 'axios';


function Recipes(props) {

// const [query, setQuery] = useState("");

//   const YOUR_APP_ID = "9aca6629";
//   const YOUR_APP_KEY = "35364572feead5028576aa96514a58e4";
//   const url = `https://api.edamam.com/search?q=$chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

axios({
  method: "GET",
  url: "https://developers.zomato.com/api/v2.1/search",
  headers: {
    "user-key": "871e0ad7fee2e41d40be337935143f5e",
    "content-type": "application/json"
  }
})
  .then(response => {
    console.log('Working', response);
  })
  .catch(error => {
    console.log(error);
  });




return (
<div>
  <h1>Recipe</h1>
  <form id = "searchBar"/>
    <input type="text" name="inputBar" value="" placeholder="Search Restaurants"  id="searchBar"/>
    <input type="button" name = "submitButton" value="Click here" id="searchButton"/>
</div>
)
}

export default Recipes;
