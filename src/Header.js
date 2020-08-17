import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  //since my state only contin basket I am destctring it elsei woulr have used  "state" object insted of basekt
  //dipatch will communicate with my reducer to perfro logic on data layer
  // const [{basket} , dispatch] = useStateValue();
  const [{ basket, user }] = useStateValue(); //don't need dispatcer in this case

  return (
    <nav className="header">
      {/*logo on the lfet-->img*/}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="http://pngimg.com/uploads/amazon/amazon_PNG23.png"
        />
      </Link>

      {/* search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header_nav">
        {/* first link */}
        <Link to="login" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Hello {user?.email}</span>{" "}
            //without this ? I was getting error.
            <span className="header_option_line2">Sign In</span>
          </div>
        </Link>
        {/* second link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Return</span>
            <span className="header_option_line2">& Orders</span>
          </div>
        </Link>
        {/* Third link */}

        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_option_line1">Your prime</span>
            <span className="header_option_line2">Prime</span>
          </div>
        </Link>
      </div>
      {/* Basket Icon with the number */}
      <Link to="/checkout" className="header_link">
        <div className="header_option_backet">
          <AddShoppingCartIcon />
          {/* adding two classes to my basket count */}
          <span className="header_option_line2 header_basket_count">
            {basket?.length}{" "}
            {/**? it prevent error when basket is undefine. This is so fuxing important***/}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
