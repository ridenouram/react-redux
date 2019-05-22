import './drinksActions';
import { addDrink, ADD_DRINK, removeDrink, REMOVE_DRINK, emptyDrinks, EMPTY_DRINKS } from './drinksActions';

describe('drinks actions', () => {
  it('adds a drink', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });

  it('removes a drink', () => {
    expect(removeDrink('water')).toEqual({
      type: REMOVE_DRINK,
      payload: 'water'
    });
  });

  it('removes all drinks', () => {
    expect(emptyDrinks()).toEqual({
      type: EMPTY_DRINKS
    });
  });
});
