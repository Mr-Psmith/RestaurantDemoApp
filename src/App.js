import React from 'react';
import './App.css';
import Header from './components/Layout/header';
import BodyMeals from './components/Meals/body-meals';

function App() {
  return (
    <>
      <Header />
      <main>
        <BodyMeals/>
      </main>
    </>
  );
}

export default App;
