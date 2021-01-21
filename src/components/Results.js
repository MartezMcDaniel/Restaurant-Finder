import React from "react";
import "../Results.css";

export default function Results({ item }) {
  let image = "./download.jpeg";

  if (item.featured_image == "") {
    image = "./images/download.jpeg";
  } else {
    image = item.featured_image;
  }
  return (
    <body>
      <div id="top" className=""></div>

      <div className="container">
        <div className="card-img">
          <img src={image} alt={item.name} />
        </div>
        <div className="rest-info">
          <h1 className="name">{item.name}</h1>
          <section className="location-city">{item.location.city}</section>
          <section className="location-address">
            Address: {item.location.address}
          </section>
          <section className="cuisine">Cuisines: {item.cuisines}</section>
          <section className="cost">
            Average Cost For Two: ${item.average_cost_for_two}
            <section className="menu">
              <a href={item.menu_url}>Menu</a>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}
