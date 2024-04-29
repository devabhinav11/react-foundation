import { Link } from "react-router-dom";

const Header = () => {
  console.log("Called");
  return (
    <div className="header-container">
      <div className="logo">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604"
          alt=""
        />
      </div>
      <div className="navbar-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/grocery">Grocery</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
