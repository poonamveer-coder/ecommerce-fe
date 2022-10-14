import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
// import UploadFile from "../components/UploadFile";
// import { BrowserRouter } from "react-router-dom";

function EditProduct({}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("id");

  const [product, setProduct] = useState({});
  const { name, description, price, imageUrl } = product;
  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const result = axios.put(`http://localhost:3000/products/${productId}`, {
      name,
      description,
      price,
      imageUrl,
    });
  };
  useEffect(() => {
    getProducrt();
  }, []);

  const getProducrt = async () => {
    console.log(searchParams.get("id"));
    const result = await axios.get(
      `http://localhost:3000/products/${productId}`
    );
    setProduct(result.data.data);
    console.log(result);
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

export default EditProduct;
