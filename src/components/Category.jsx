import React from "react";

function Category({ category, filterMenu }) {
  return (
    <button
      onClick={() => filterMenu(category)}
      type="button"
      className="filter-btn"
    >
      {category}
    </button>
  );
}

export default Category;
