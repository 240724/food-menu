import React from "react";
import "./userInfo.css";
const UserInformation = ({ userName, reviewedFoods }) => {
  return (
    <div className="user-info">
      <div className="info">
        <h1>User Information</h1>
        <h4>User Name : {userName}</h4>
        <h5>Reviewed Foods</h5>
        <div className="d-flex flex-column g-1">
          {reviewedFoods.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
