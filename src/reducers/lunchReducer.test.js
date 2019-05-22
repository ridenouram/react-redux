import reducer from './lunchReducer';
import { addDrink, removeDrink, emptyDrinks } from '../actions/drinksActions';
import { addChips, removeChips, emptyChips } from '../actions/chipsActions';
import { addSandwich, removeSandwich, emptySandwiches } from '../actions/sandwichActions';

describe('reducer', () => {
  it('can handle addDrink', () => {
    const initialState = {
      drinks: [],
      chips: [],
      sandwiches: []
    };

    const newState = reducer(initialState, addDrink('water'));

    expect(newState).toEqual({
      drinks: ['water'],
      chips: [],
      sandwiches: []
    });
  });

  it('can handle addChips', () => {
    const initialState = {
      drinks: [],
      chips: [],
      sandwiches: []
    };

    const newState = reducer(initialState, addChips('fritos'));

    expect(newState).toEqual({
      drinks: [],
      chips: ['fritos'],
      sandwiches: []
    });
  });
  
  it('can handle addSandwich', () => {
    const initialState = {
      drinks: [],
      chips: [],
      sandwiches: []
    };

    const newState = reducer(initialState, addSandwich('cheese'));

    expect(newState).toEqual({
      drinks: [],
      chips: [],
      sandwiches: ['cheese']
    });
  });

  it('can handle removeDrink', () => {
    const initialState = {
      drinks: ['water'],
      chips: [],
      sandwiches: []
    };

    const newState = reducer(initialState, removeDrink('water'));

    expect(newState).toEqual({
      drinks: [],
      chips: [],
      sandwiches: []
    });
  });

  it('can handle removeChips', () => {
    const initialState = {
      drinks: [],
      chips: ['fritos'],
      sandwiches: []
    };

    const newState = reducer(initialState, removeChips('fritos'));

    expect(newState).toEqual({
      drinks: [],
      chips: [],
      sandwiches: []
    });
  });

  it('can handle removeSandwich', () => {
    const initialState = {
      drinks: [],
      chips: [],
      sandwiches: ['cheese']
    };

    const newState = reducer(initialState, removeSandwich('cheese'));

    expect(newState).toEqual({
      drinks: [],
      chips: [],
      sandwiches: []
    });
  });

  it('can handle emptyDrinks', () => {
    const initialState = {
      drinks: ['water', 'kombucha'],
      chips: [],
      sandwiches: []
    };

    const newState = reducer(initialState, emptyDrinks());

    expect(newState).toEqual({
      drinks: [],
      chips: [],
      sandwiches: []
    });
  });

  it('can handle emptyChips', () => {
    const initialState = {
      drinks: [],
      chips: ['fritos', 'more fritos'],
      sandwiches: []
    };

    const newState = reducer(initialState, emptyChips());

    expect(newState).toEqual({
      drinks: [],
      chips: [],
      sandwiches: []
    });
  });
  it('can handle emptySandwiches', () => {
    const initialState = {
      drinks: [],
      chips: [],
      sandwiches: ['cheese', 'bologne']
    };

    const newState = reducer(initialState, emptySandwiches());

    expect(newState).toEqual({
      drinks: [],
      chips: [],
      sandwiches: []
    });
  });
});
