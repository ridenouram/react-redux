import { addChips, ADD_CHIPS, removeChips, REMOVE_CHIPS, emptyChips, EMPTY_CHIPS } from './chipsActions';

describe('chips actions', () => {
  it('adds chips', () => {
    expect(addChips('fritos')).toEqual({
      type: ADD_CHIPS,
      payload: 'fritos'
    });
  });

  it('removes single chips', () => {
    expect(removeChips('fritos')).toEqual({
      type: REMOVE_CHIPS,
      payload: 'fritos'
    });
  });

  it('removes all chips', () => {
    expect(emptyChips()).toEqual({
      type: EMPTY_CHIPS
    });
  });
});
