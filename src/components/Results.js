import React from "react";
import "../Results.css";

function Results({ item }) {
  return (
    <body>
      <div className="container">
        <div className="card-img">
          <img src={item.featured_image} alt={item.name} />
        </div>
        <div className="rest-info">
          <h1 className="name">{item.name}</h1>
          <section className="location">
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

export default Results;
