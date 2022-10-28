import React from "react";
import "./userInfo.css";
const UserInformation = ({ userName, userPassword }) => {
  return (
    <div className="user-info">
      <div className="info">
        <h1>User Information</h1>
        <h4>{userName}</h4>
        <h4>{userPassword}</h4>
      </div>
    </div>
  );
};

export default UserInformation;
