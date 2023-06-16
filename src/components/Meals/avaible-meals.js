import { useState, useEffect } from "react";

import Card from "../UI/card";
import MealItem from "./meal-item/meal-item";
import classes from "./avaible-meals.module.css";

// const DUMMY_MEALS = [
//   /* This is outside of the "app" as if this would be an array from outside, but we want to transform it to an JSX array. */
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

function AvaibleMeals() {

  // my naiv try(thinking that mx wont give somethin utterly impossible for my skils for excercise):
  // useEffect(()=>{
  //   getMealsHandler(); /* this way se trigger the meals when the site is loaded the first time */
  // }, []); /* here we should put what should next time change when we want to trigger this but cant use the function intself, bec it would do an infinite loop, as functions change at every rerun (or we could use callback)*/

  // async function getMealsHandler () {
  //   await fetch("https://database-firebasedemo-default-rtdb.firebaseio.com/meals.json").than(meals => {
  //     const mealsList = meals.map((meal) => ( /* We dont have to store in a const, it just nicer. But we could have just put it where the const is now in raw */
  //       <MealItem
  //         key={meal.id}
  //         id={meal.id}
  //         name={meal.name}
  //         description={meal.description}
  //         price={meal.price}
  //       />
  //     ));
  //   })
  // };

  const [meals,setMeals] = useState([]);

useEffect(() => {
  const fetchmeals = async () => {
    const response = await fetch ("https://database-firebasedemo-default-rtdb.firebaseio.com/meals.json");
    const responseData = await response.json();
  
    /* The firebase stores obj, but we need arrays, so we need to convert them  */
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      })
    }

    setMeals(loadedMeals);
  };

  fetchmeals();
}, []);

const mealsList = meals.map((meal) => ( /* We dont have to store in a const, it just nicer. But we could have just put it where the const is now in raw */
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
