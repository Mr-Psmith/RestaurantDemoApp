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
  const [isLoading, setIsLoading] = useState(true);
  const {httpError, setHttpError} = useState();

useEffect(() => {
  const fetchmeals = async () => {
    setIsLoading(true);
    const response = await fetch ("https://database-firebasedemo-default-rtdb.firebaseio.com/meals.json");
      
    if (!response.ok) { /* again how the f.ck should I have known this before max showing it????? */
      throw new Error("Something went wrong!"); /* we could look into what server throw at us, so we could make this more specific, but max wont tire homself of showing that to us*/
    }

    const responseData = await response.json();
    /* The firebase stores obj, but we need arrays, so we need to convert them  */
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    setMeals(loadedMeals);
    setIsLoading(false);
  };

  /* so we try it, and if an error is thrown -as we throw it upper in the code- than we go into catch */
    //Soooooo we cant add try catch to awayt-sync stuff directly, and thats what I understand ca., as max than solves it as solved below hopefuilly I dont have to understand it later Man I hope trading works out
    //xept that it doesnt work for me, but I gave up
    fetchmeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
}, []);

if (isLoading) { 
  return (<section className={classes.MealsLoading}>
    <p>Loading....</p>
  </section>
  );
} 
if (httpError) {
  return (<section className={classes.MealsError}>
    <p>Error happened.</p>
  </section>
  );
}

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
