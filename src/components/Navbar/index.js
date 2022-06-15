import React from "react";
import "./index.css";
function index() {
  return (
    <div className="navbar">
      <div className="title">TeeRex Store</div>
      <div className="right-content">
        <div className="title-products">Products</div>
        <div className="icon-container">
          <i className=" fas fa-shopping-cart cart-icon"></i>
          <p className="cart-number">1</p>
        </div>
      </div>
    </div>
  );
}

export default index;
