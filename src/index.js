import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
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

render(
  <App />,
  document.getElementById('root')
);
