import React from "react";
import "./index.css";
import SearchBar from "../SearchBar/index";
const index = (props) => {
  return (
    <div className="products">
      <SearchBar />
      <div className="products-container">
        {props.data.map((eachProduct) => {
          return (
            <div className="product-card">
              <img
                src={eachProduct.imageURL}
                className="product-image"
                alt="product"
              />
              <p>{eachProduct.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
