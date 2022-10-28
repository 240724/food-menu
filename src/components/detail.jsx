import React from "react";

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
  return (
    <div className="info">
      <h2>{label}</h2>
      <div className="d-flex justify-content-start">
        <div className="d-flex flex-column justify-content-center">
          <p>{calories.toFixed(2)}</p>
          <p>{cautions}</p>
          <p>{dietLabels}</p>
        </div>
        <div className="ms-2">
          <img src={image} alt="" />
        </div>
        <div className="d-flex flex-column ms-2">
          <p>{mealType}</p>
          <p>{source}</p>
          <p>{totalWeight.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
