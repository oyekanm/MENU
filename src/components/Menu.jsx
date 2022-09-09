import React from "react";

function Menu({ item }) {
  return (
    <div className="section-center">
      {item.map((item) => {
        const { id, img, title, price, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <div className="item-header">
                <p>{title}</p>
                <p className="price">${price}</p>
              </div>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
