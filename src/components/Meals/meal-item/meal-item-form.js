import React from 'react';
import './App.css';
import Header from './components/Layout/header';
import BodyMeals from './components/Meals/body-meals';

function MealItemForm() {
  return (
    <>
    <form className={classes.form}>
        <label for="quantity" >Amount</label>
        <input type="number" id="quantity" min="1" max="99" />
        <button>Add</button>
    </form>
    </>
  );
}

export default MealItemForm;