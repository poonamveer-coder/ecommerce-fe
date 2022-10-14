import React, { useState } from "react";
import axios from "axios";
import UploadFile from "../components/UploadFile";
import { BrowserRouter } from "react-router-dom";

function UpdateProduct({ product }) {
  const [state, setState] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
    _id: product._id,
  });
  const { name, description, price, imageUrl } = state;
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const result = axios.put("http://localhost:3000/products", {
      name,
      description,
      price,
      imageUrl,
    });
  };

  return (
    <div>
      <div></div>
      <form action="" onSubmit={onSubmit}>
        <div>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="name"
            onChange={onChange}
          />
        </div>
        <div>
          <textarea
            value={description}
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="description"
            onChange={onChange}
          ></textarea>
        </div>
        <div>
          <input
            name="price"
            type="number"
            value={price}
            placeholder="price"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            name="imageUrl"
            type="text"
            value={imageUrl}
            placeholder="imageUrl"
            onChange={onChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
