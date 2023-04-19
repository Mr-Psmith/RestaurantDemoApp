import React from 'react';

import MealsSummary from './meals-summary';
import AvaibleMeals from './avaible-meals';

function BodyMeals() {
  return (
    <>
      <MealsSummary />
      <AvaibleMeals />
    </>
  );
}

export default BodyMeals;
