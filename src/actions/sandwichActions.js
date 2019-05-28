export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const removeSandwich = sandwich => ({
  type: REMOVE_SANDWICH,
  payload: sandwich
});

export const EMPTY_SANDWICHES = 'EMPTY_SANDWICHES';
export const emptySandwiches = () => ({
  type: EMPTY_SANDWICHES
});
