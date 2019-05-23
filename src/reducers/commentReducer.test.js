import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentAction';

describe('commentReducer', () => {
  it('creates a comment', () => {
    const initialState = {};
    
    const newState = reducer(initialState, createComment('666', 'ABD', 'comment here'));

    expect(newState).toEqual({
      ['666'] : {
        ['ABD'] : {
          body: 'comment here'
        }
      }
    });
  });

  it('deletes a comment', () => {
    const initialState = {
      ['666'] : {
        ['ABD'] : {
          body: 'comment here'
        }
      },
      ['777'] : {
        ['EFH'] : {
          body: 'comment here'
        }
      }
    };

    const newState = reducer(initialState, deleteComment('666', 'ABD'));

    expect(newState).toEqual({
      ['666'] : {},
      ['777'] : {
        ['EFH'] : {
          body: 'comment here'
        }
      }
    });
  });
});
