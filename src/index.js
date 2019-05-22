import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { ADD_DRINK, addDrink, REMOVE_DRINK, removeDrink, EMPTY_DRINKS, emptyDrinks } from './actions/drinksActions';
import { ADD_CHIPS, REMOVE_CHIPS, EMPTY_CHIPS, addChips, removeChips, emptyChips } from './actions/chipsActions';

const initialState = {
  drinks: [],
  chips: [],
  sandwiches: []
};

function remove(array, element) {
  const index = array.indexOf(element);
  array.splice(index, 1);
  return array;
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drinks: [...state.drinks, action.payload] };
    case ADD_CHIPS:
      return { ...state, chips: [...state.chips, action.payload] };
    case 'ADD_SANDWICH':
      return { ...state, sandwiches: [...state.sandwiches, action.payload] };
    case REMOVE_DRINK:
      return { ...state, drinks: remove(state.drinks, action.payload) };
    case REMOVE_CHIPS:
      return { ...state, chips: remove(state.chips, action.payload) };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwiches: remove(state.sandwiches, action.payload) };
    case EMPTY_DRINKS: 
      return { ...state, drinks: [] };
    case EMPTY_CHIPS: 
      return { ...state, chips: [] };
    case 'EMPTY_SANDWICHES': 
      return { ...state, sandwiches: [] };
    default:
      return state;
  }
}

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

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'bologne'
});

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'cheese'
});

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'cheese'
});

store.dispatch(removeChips('fritos'));

store.dispatch(emptyDrinks());

store.dispatch(emptyChips());

store.dispatch({
  type: 'EMPTY_SANDWICHES'
});

render(
  <p>REDUX</p>,
  document.getElementById('root')
);  
