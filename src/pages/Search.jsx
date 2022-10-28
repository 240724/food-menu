import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import FoodCards from "../components/foodCards";

import "./search.css";
import { Col, Row } from "react-bootstrap";
const Search = () => {
  const [food, setFood] = useState("");
  const [mealType, setMealType] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [respons, setRespons] = useState([]);
  const [err, setErr] = useState("");

  //     url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
  //       fetch(url).then(res => res.json).then(data => setRespons(data)).catch(error => console.log(error))

  const getData = async (food, mealType) => {
    const APP_KEY = "4a5b108c509ed4e48cd68f262407ac73";
    const APP_ID = "82eb25da";
    const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    try {
      const { data } = await axios(url);
      setRespons(data.hits);
      setIsOk(true);
      setErr("");
    } catch (error) {
      setErr(error);
    }
  };

  const searchFood = () => {
    if (food && mealType) {
      getData(food, mealType);
    } else if (food && !mealType) {
      setErr("please select meal type");
    } else if (!food && mealType) {
      setErr("please enter food name");
    } else if (!food && !mealType) {
      setErr("please enter food name and select meal type");
    }
  };

  return (
    <div className="search">
      <div className="search-div">
        <h1 className="food">Food</h1>
        <Form className="search-box">
          <Form.Group className="mb-3">
            <Form.Control
              style={{ height: "40px" }}
              type="text"
              placeholder="Enter food name"
              onChange={(e) => setFood(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{ height: "40px" }}
            variant="primary"
            type="button"
            onClick={searchFood}
          >
            Search
          </Button>
          <Form.Select
            aria-label="Default select example"
            style={{ height: "40px" }}
            onChange={(e) => setMealType(e.target.value)}
          >
            {/* <option>Open this select menu</option> */}
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Tea Time</option>
          </Form.Select>
        </Form>
        <p
          style={{
            color: "red",
            fontSize: "1.5rem",
            background: "black",
            padding: "0 1rem",
          }}
        >
          {err}
        </p>
      </div>
      {isOk && (
        <div className="cards">
          <Row className="g-3">
            {respons.length === 0 ? (
              <span style={{ color: "red" }}>
                The name of the food you entered could not be found
              </span>
            ) : (
              respons.map((item) => {
                return (
                  <Col key={item.recipe.totalWeight}>
                    <FoodCards data={item.recipe} summary />
                  </Col>
                );
              })
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Search;
