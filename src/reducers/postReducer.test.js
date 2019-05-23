import reducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

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

  it('deletes a post', () => {
    const initialState = {
      posts: {
        666: {
          title: 'post one',
          body: 'my first post'
        },
        777: {
          title: 'post two',
          body: 'my second post'
        }
      }
    };

    const newState = reducer(initialState, deletePost(666));

    expect(newState).toEqual({
      posts: {
        777: {
          title: 'post two',
          body: 'my second post'
        }
      }
    });
  });
});
