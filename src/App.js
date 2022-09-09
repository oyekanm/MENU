import React, { useState } from "react";
import Category from "./components/Category";
import Menu from "./components/Menu";
import menu from "./data";

const newCategories = ["all", ...new Set(menu.map((btn) => btn.category))];

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(newCategories);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenuItem(menu);
    } else {
      setMenuItem(menu.filter((menu) => menu.category === category));
    }
  };

  return (
    <section className="menu section">
      <div className="title">
        <p>menu</p>
      </div>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <Category key={index} category={category} filterMenu={filterMenu} />
          );
        })}
      </div>
      <Menu item={menuItem} />
    </section>
  );
}

export default App;
