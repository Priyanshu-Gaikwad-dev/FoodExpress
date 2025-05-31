import "./App.css";
import { Link, useLocation, useNavigate } from "react-router";
import SearchBar from "./SearchBar";
import React, { useContext } from "react";
// import logo from "../ImgLogo/swiggy-logo.svg";
import SvgComponent from "../ImgLogo/SvgComponent";
import { UserContext } from "../Links/userContext";
import useOnlineStatus from "./useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Header({ filteredData, setFilteredData, setnewFData }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items || []);
  const onlineStatus = useOnlineStatus();

  const handleLoginBtn = () => {
    if (loggedInUser) {
      setLoggedInUser("");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div id="navbar">
        {/* <img src={logo} alt="logo" id="logo" /> */}
        <h1 style={{ display: "flex", alignItems: "center", fontSize: "40px"}}>FoodExpress</h1>
        <SearchBar
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          setnewFData={setnewFData}
        />
        <div id="links">
          <span>Online Status: {onlineStatus ? "✔️ Online" : "❌ Offline"}</span>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/grocery">Grocery</Link>

          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faCartShopping} id="cart" />
            <span className="cart-count">{cartItems.length}</span>
          </Link>

          <button id="login" onClick={handleLoginBtn}>
            {loggedInUser ? "Logout" : "Login"}
          </button>

          {location.pathname === "/" && !loggedInUser && <span>Guest</span>}
          {loggedInUser && <Link to="/profile">{loggedInUser}</Link>}
        </div>
      </div>
    </div>
  );
}

export default Header;