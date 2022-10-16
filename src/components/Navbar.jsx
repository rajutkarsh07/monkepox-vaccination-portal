import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import icon from "../images/monkeypox.webp";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      {/* <a href="#home">Cases</a> */}
      <Link to="/cases">Cases</Link>
    </p>
    <p>
      {/* <a href="#wgpt3">Nearby Hospitals</a> */}
      <Link to="/hospitals">Nearby Hospitals</Link>
    </p>
    <p>
      {/* <a href="#possibility">Vaccination</a> */}
      <Link to="/vaccination">Vaccination</Link>
    </p>
    <p>
      {/* <a href="#features">Team Members</a> */}
      <Link to="/Team">Team Members</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="monkey__navbar">
      <div className="monkey__navbar-links">
        <div className="monkey__navbar-links_logo">
          {/* <h3>MONKEYPOX VACCINATION</h3> */}
          <img src={icon} alt="monkeypox vaccination" />
        </div>
        <div className="monkey__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="monkey__navbar-sign">
        <p>Login</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="monkey__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="monkey__navbar-menu_container scale-up-center">
            <div className="monkey__navbar-menu_container-links">
              <Menu />
              <div className="monkey__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
