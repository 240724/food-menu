import React from "react";
import "./login.css";
import ikon from "../assets/ikon.jpg";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser, setUserName, setUserPassword }) => {
  const navigate = useNavigate();
  const userLogin = () => {
    setUser(true);
    navigate("/");
  };
  return (
    <div className="login">
      <div className="info">
        <img src={ikon} alt="" />
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button type="button" onClick={userLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
