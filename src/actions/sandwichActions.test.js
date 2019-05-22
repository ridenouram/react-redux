import { addSandwich, ADD_SANDWICH, removeSandwich, REMOVE_SANDWICH, emptySandwiches, EMPTY_SANDWICHES } from "./sandwichActions";

describe('sandwich actions', () => {
  it('adds a sandwich', () => {
    expect(addSandwich('bologne')).toEqual({
      type: ADD_SANDWICH,
      payload: 'bologne'
    });
  });

  it('removes a sandwich', () => {
    expect(removeSandwich('bologne')).toEqual({
      type: REMOVE_SANDWICH,
      payload: 'bologne'
    });
  });

  it('removes all sandwiches', () => {
    expect(emptySandwiches()).toEqual({
      type: EMPTY_SANDWICHES
    });
  });
});
