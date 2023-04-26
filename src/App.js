import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Layout/header';
import BodyMeals from './components/Meals/body-meals';
import Cart from './components/Cart/Cart';

function App() {

  const [showModal, setShowModal] = useState(false); /* Not an empty string as I put it */

  const openCartHandler = () => {
    setShowModal(true);
    console.log("WUTT");
  };
  const closeCartHandler = () => {
    setShowModal(false);
  };
  

  return (
    <>
      {showModal && <Cart closeCartHandlerPrToTheApp={closeCartHandler}  />}
      {/* <Cart closeCartHandlerProp={closeCartHandler} /> */}
      <Header openModalHandlerPr={openCartHandler} />
      <main>
        <BodyMeals/>
      </main>
    </>
  );
}

export default App;
