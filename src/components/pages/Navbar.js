import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiFlowerPot } from "react-icons/gi";
import { FaBars, FaTimes, FaShoppingBasket } from "react-icons/fa";
import { Button } from "../pages/Button";
import "../pages/Navbar.css";
import { IconContext } from "react-icons/lib";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiFlowerPot className="navbar-icon" />
              <span style={{ color: "green" }}>Green</span>{" "}
              <span style={{ color: "white" }}>Queen</span>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/orders"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/checkout"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <div className="header_optionbasket">
                    <FaShoppingBasket />
                    <span className="header_basketcount">{basket?.length}</span>
                  </div>
                </Link>
              </li>
              <li className="nav-btn">
                <Link to={!user && "/login"} className="btn-link">
                  <div
                    className="header__option"
                    onClick={handleAuthentication}
                  >
                    <span className="header__optionLineOne">
                      Hello {!user ? "Guest" : user.email}
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="header__optionLineTwo">
                      {user ? "Sign Out" : "Sign IN"}
                    </span>
                  </div>
                </Link>
              </li>
              {/* <li className="nav-btn">
                {button ? (
                  <Link to="/signup" className="btn-link">
                    <Button buttonStyle="btn--outline">Signup</Button>
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Signup
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
