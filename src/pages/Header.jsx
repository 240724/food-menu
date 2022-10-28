import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="mynavbar1">
      <Link to={"/"} className="head-name">
        IHSAN
      </Link>
      <div id="links">
        <NavLink to={"/about"} className="link">
          About
        </NavLink>
        <a href="https://github.com/240724" target="_blank" className="link">
          Github
        </a>
        <NavLink to={"/user"} className="link">
          User
        </NavLink>
        <NavLink to={"/logout"} className="link">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
