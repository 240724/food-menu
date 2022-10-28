import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="mynavbar1">
      <Link to={"/"} className="head-name">
        IHSAN
      </Link>
      <div id="links">
        <Row>
          <Col>
            <NavLink to={"/login"} className="link">
              Login
            </NavLink>
          </Col>
          <Col>
            <NavLink to={"/about"} className="link">
              About
            </NavLink>
          </Col>
          <Col>
            <a
              href="https://github.com/240724"
              target="_blank"
              className="link"
            >
              Github
            </a>
          </Col>
          <Col>
            <NavLink to={"/user"} className="link">
              User
            </NavLink>
          </Col>
          <Col>
            <NavLink to={"/logout"} className="link">
              Logout
            </NavLink>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
