import reducer from './postReducer';
import { createPost } from '../actions/postActions';

describe('postReducer', () => {
  it('creates a post', () => {
    const initialState = {
      posts: {}
    };

    const newState = reducer(initialState, createPost('title', 'body', 'id'));

    expect(newState).toEqual({
      posts: {
        ['id']: {
          title: 'title',
          body: 'body'
        }
      }
    });
  });
});
