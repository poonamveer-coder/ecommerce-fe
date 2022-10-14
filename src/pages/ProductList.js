import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import "./product.css";
import SearchBox from "../components/SearchBox";
import DeleteProductButton from "../components/DeleteProductButton";
import UpdateProduct from "../components/UpdateProduct";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";

  useEffect(() => {
    // axios.get(url).then((result) => {
    //   setProducts(result.data.data.result);
    // });
    getData({});
  }, []);
  // http://localhost:3000/products?keyword=Mac

  const getData = ({ keyword }) => {
    let params = {};
    if (keyword) {
      params.keyword = keyword;
    }
    let queryStr = "";
    // params = {keyword:'Test', limit:2, page:1}
    //keyword=test&limit=2&page=1
    for (let key in params) {
      queryStr += `${key}=${params[key]}`;
    }
    if (queryStr) {
      queryStr = "?" + queryStr;
    }

    let url = `http://localhost:3000/products${queryStr}`;

    axios.get(url).then((result) => {
      setProducts(result.data.data.result);
    });
  };

  const [editProduct, setEditProduct] = useState();
  const handleOnClick = (product) => {
    setEditProduct({ ...product });
  };

  return (
    <div className="profilelist">
      {editProduct && <UpdateProduct product={editProduct} />}
      <SearchBox
        onSubmitKeyword={(value) => {
          getData({ keyword: value });
        }}
      />
      {products.map((product) => {
        return (
          <div>
            <ProductDetails product={product} />

            <DeleteProductButton
              product={product}
              onDelete={() => {
                getData({});
              }}
            />

            <a
              href=""
              onClick={(event) => {
                event.preventDefault();
                // handleOnClick(product);
                Navigate(`/editProduct?id=${product._id}`);
              }}
            >
              Edit
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
