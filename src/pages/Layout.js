import { Link, Outlet } from "react-router-dom";
import "./styles.css";
const Layout = () => {
  return (
    <div className="mainContainer">
      <header>
        <nav>
          <ul className="menuLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/productlist">ProductList</Link>
            </li>
            <li>
              <Link to="/editproduct">EditProduct</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="containerRoutes">
        <Outlet />
      </div>
      <footer>I am footer</footer>
    </div>
  );
};

export default Layout;
