import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Layout/header';
import BodyMeals from './components/Meals/body-meals';
import Cart from './components/Cart/Cart';

function App() {

  const [showModal, setShowModal] = useState("");

  const closeCartHandler = () => {
    setShowModal("");
  };

  const cartHandler = () => {
    setShowModal(<Cart closeCartHandlerProp={closeCartHandler}/>);
  };

  return (
    <>
      {showModal}
      {/* <Cart closeCartHandlerProp={closeCartHandler} /> */}
      <Header cartHandler={props.cartHandlerPr} />
      <main>
        <BodyMeals/>
      </main>
    </>
  );
}

export default App;
