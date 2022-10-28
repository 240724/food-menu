import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./detail.css";
const Detail = ({ data, id }) => {
  console.log(data);
  console.log(id);
  const {
    image,
    calories,
    cautions,
    dietLabels,
    label,
    mealType,
    source,
    totalWeight,
  } = data;
  const navigate = useNavigate();
  return (
    <div className="detail-info">
      <div className="detail-box">
        <h2 className="text-center text-danger">{label}</h2>
        <div className="d-flex justify-content-between content">
          <div className="d-flex flex-column">
            <p>Total Calories : {calories.toFixed(2)}</p>
            <p>Cautions : {cautions}</p>
            <p>Diet Types : {dietLabels}</p>
          </div>
          <div className="ms-4">
            <img src={image} alt="" className="detail-img" />
          </div>
          <div className="d-flex flex-column ms-4 drk">
            <p>Meal Type : {mealType}</p>
            <p>Source : {source}</p>
            <p>Food weight : {totalWeight.toFixed(2)}</p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <Button className="p-1" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button className="p-1" onClick={() => navigate("/logout")}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
