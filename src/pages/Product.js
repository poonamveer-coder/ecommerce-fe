import React, { useState } from "react";
import axios from "axios";
import UploadFile from "../components/UploadFile";

function Product() {
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const { name, description, price, imageUrl } = state;
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const result = axios.post("http://localhost:3000/products", {
      name,
      description,
      price,
      imageUrl,
    });
  };
  return (
    <div>
      <div>
        <UploadFile />
      </div>
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

export default Product;
