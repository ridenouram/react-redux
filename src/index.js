import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const initialState = {
  drink: null,
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('before any actions: ', store.getState());

store.subscribe(() => {
  console.log('store has changed');
});

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'water'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'all-dressed'
});

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'bologne'
});

console.log('all added', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH'
});

store.dispatch({
  type: 'REMOVE_CHIPS'
});

store.dispatch({
  type: 'REMOVE_DRINK'
});

console.log('all removed', store.getState());

render(
  <p>REDUX</p>,
  document.getElementById('root')
);  
