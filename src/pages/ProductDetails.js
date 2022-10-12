import React from "react";
import "./product.css";

function ProductDetails({ product }) {
  return (
    <div className="productdetails">
      <div>{`${product.name}`}</div>
      <div>{`${product.description}`}</div>
      <div>{`${product.price}`}</div>
      <div className="productimg">
        <img src={product.imageUrl} />
      </div>
    </div>
  );
}

export default ProductDetails;
