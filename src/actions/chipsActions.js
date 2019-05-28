export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});

export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const removeChips = chips => ({
  type: REMOVE_CHIPS,
  payload: chips
});

export const EMPTY_CHIPS = 'EMPTY_CHIPS';
export const emptyChips = () => ({
  type: EMPTY_CHIPS
});
