import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentAction';
import { deletePost } from '../actions/postActions';

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

  it('when post is deleted, all comments are deleted', () => {
    const initialState = {
      ['666'] : {
        ['EEE'] : {
          body: 'comment more'
        },
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

    const newState = reducer(initialState, deletePost('666'));

    expect(newState).toEqual({
      ['777'] : {
        ['EFH'] : {
          body: 'comment here'
        }
      }
    });
  });
});
