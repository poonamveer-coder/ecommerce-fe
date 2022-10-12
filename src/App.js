import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Login } from "./pages/Login";
import NoPage from "./pages/NoPage";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const RoutesDemo = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="productlist" element={<ProductList />}></Route>

          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesDemo;
