import { ADD_DRINK, REMOVE_DRINK, EMPTY_DRINKS } from '../actions/drinksActions';
import { ADD_CHIPS, REMOVE_CHIPS, EMPTY_CHIPS } from '../actions/chipsActions';
import { ADD_SANDWICH, REMOVE_SANDWICH, EMPTY_SANDWICHES } from '../actions/sandwichActions';

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

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drinks: [...state.drinks, action.payload] };
    case ADD_CHIPS:
      return { ...state, chips: [...state.chips, action.payload] };
    case ADD_SANDWICH:
      return { ...state, sandwiches: [...state.sandwiches, action.payload] };
    case REMOVE_DRINK:
      return { ...state, drinks: remove(state.drinks, action.payload) };
    case REMOVE_CHIPS:
      return { ...state, chips: remove(state.chips, action.payload) };
    case REMOVE_SANDWICH:
      return { ...state, sandwiches: remove(state.sandwiches, action.payload) };
    case EMPTY_DRINKS: 
      return { ...state, drinks: [] };
    case EMPTY_CHIPS: 
      return { ...state, chips: [] };
    case EMPTY_SANDWICHES: 
      return { ...state, sandwiches: [] };
    default:
      return state;
  }
}
