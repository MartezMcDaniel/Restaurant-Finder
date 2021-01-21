import React from "react";
import "../Results.css";

export default function Results({ item }) {
  let image =
    "https://i.guim.co.uk/img/media/cb7ecc99b0a2e64b18468d655f3226b0cd71be6a/0_283_5843_3505/master/5843.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7c9fc03d5c4f552fb624dad22adf1298";

  if (item.featured_image == "") {
    image =
      "https://i.guim.co.uk/img/media/cb7ecc99b0a2e64b18468d655f3226b0cd71be6a/0_283_5843_3505/master/5843.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7c9fc03d5c4f552fb624dad22adf1298";
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

          <section className="location-address">
            {item.location.address}
          </section>
          <section className="cuisine">
            <b>Cuisine</b>: {item.cuisines}
          </section>
          <section className="cost">
            Average Cost For Two: ${item.average_cost_for_two} <br />
            <section className="menu">
              <a href={item.menu_url}>Menu</a>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}
