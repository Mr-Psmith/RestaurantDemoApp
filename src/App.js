import React from 'react';
import './App.css';
import Header from './components/Layout/header';
import BodyMeals from './components/Meals/body-meals';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <Cart />
      <Header />
      <main>
        <BodyMeals/>
      </main>
    </>
  );
}

export default App;
