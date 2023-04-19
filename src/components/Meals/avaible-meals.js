import React from "react";

import Card from "../UI/card";
import MealItem from "./meal-item/meal-item";
import classes from "./avaible-meals.module.css";

const DUMMY_MEALS = [
  /* This is outside of the "app" as if this would be an array from outside, but we want to transform it to an JSX array. */
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvaibleMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => ( /* We dont have to store in a const, it just nicer. But we could have just put it where the const is now in raw */
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </>
  );
}

export default AvaibleMeals;
