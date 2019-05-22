import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

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
    case 'ADD_DRINK':
      return { ...state, drinks: [...state.drinks, action.payload] };
    case 'ADD_CHIPS':
      return { ...state, chips: [...state.chips, action.payload] };
    case 'ADD_SANDWICH':
      return { ...state, sandwiches: [...state.sandwiches, action.payload] };
    case 'REMOVE_DRINK':
      return { ...state, drinks: remove(state.drinks, action.payload) };
    case 'REMOVE_CHIPS':
      return { ...state, chips: remove(state.chips, action.payload) };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwiches: remove(state.sandwiches, action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('before any actions: ', store.getState());

store.subscribe(() => {
  console.log('store has changed', store.getState());
});

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'water'
});

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'kombucha'
});

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'water'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'all-dressed'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'fritos'
});

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

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'all-dressed'
});

render(
  <p>REDUX</p>,
  document.getElementById('root')
);  
