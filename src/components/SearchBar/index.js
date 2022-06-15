import React from "react";
import "./index.css";
const index = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search for Products"
        />
      </div>
      <i className="fa fa-search search-icon" aria-hidden="true"></i>
    </div>
  );
};

export default index;
