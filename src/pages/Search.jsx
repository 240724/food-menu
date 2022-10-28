import React, { useEffect, useState } from "react";
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

  let url = "";
  // useEffect(() => {
  //     url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
  //   try {
  //       fetch(url).then(res => res.json).then(data => setRespons(data)).catch(error => console.log(error))
  //   } catch (error) {
  //       console.log(error);
  //   }

  // }, [isOk])
  const getData = async (food, mealType) => {
    const APP_KEY = "4a5b108c509ed4e48cd68f262407ac73";
    const APP_ID = "82eb25da";
    const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    const { data } = await axios(url);
    setRespons(data.hits);
  };
  // getData();
  // useEffect(() => {
  //   getData(food, mealType);
  // }, [isOk]);

  const searchFood = () => {
    setIsOk(true);
    // console.log(food, mealType);
    // console.log("calisti");
    getData(food, mealType);
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
            <option>Open this select menu</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Tea Time</option>
          </Form.Select>
        </Form>
      </div>
      {isOk && (
        <div className="cards">
          <Row className="g-3">
            {respons.map((item) => {
              return (
                <Col key={item.recipe.totalWeight}>
                  <FoodCards data={item.recipe} summary />
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Search;
