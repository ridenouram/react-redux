import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { addDrink, removeDrink, emptyDrinks } from './actions/drinksActions';
import { addChips, removeChips, emptyChips } from './actions/chipsActions';
import { addSandwich, removeSandwich, emptySandwiches } from './actions/sandwichActions';
import reducer from './reducers/lunchReducer';

const store = createStore(reducer);

console.log('before any actions: ', store.getState());

store.subscribe(() => {
  console.log('store has changed', store.getState());
});

store.dispatch(addDrink('water'));

store.dispatch(addDrink('kombucha'));

store.dispatch(removeDrink('water'));

store.dispatch(addChips('all-dressed'));

store.dispatch(addChips('fritos'));

store.dispatch(addSandwich('bologne'));

store.dispatch(addSandwich('cheese'));

store.dispatch(removeSandwich('cheese'));

store.dispatch(removeChips('fritos'));

store.dispatch(emptyDrinks());

store.dispatch(emptyChips());

store.dispatch(emptySandwiches());

render(
  <p>REDUX</p>,
  document.getElementById('root')
);  
