import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import "./product.css";
import SearchBox from "../components/SearchBox";
import DeleteProductButton from "../components/DeleteProductButton";

function ProductList() {
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

  return (
    <div className="profilelist">
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
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
