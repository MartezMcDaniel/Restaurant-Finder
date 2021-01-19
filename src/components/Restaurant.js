import React from "react";
import "../Restaurant.css";

function Restaurant({ item }) {
  return (
    <div className="parent blue">
      <div className="header">{item.name}</div>
      <img src={item.featured_image} />
      <div className="footer">
        <section className="cuisine">{item.cuisines}</section>
        <section className="menu">
          <a href={item.menu_url}>Menu</a>
        </section>
        <section className="currency">{item.currency}</section>
      </div>
    </div>
  );
}

export default Restaurant;
