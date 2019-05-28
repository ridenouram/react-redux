import reducer from './postReducer';
import { createPost, deletePost, updatePost } from '../actions/postActions';

describe('postReducer', () => {
  it('creates a post', () => {
    const initialState = {};

    const newState = reducer(initialState, createPost('title', 'body', 'id'));

    expect(newState).toEqual({
      ['id']: {
        title: 'title',
        body: 'body'
      }
    });
  });

  it('deletes a post', () => {
    const initialState = {
      666: {
        title: 'post one',
        body: 'my first post'
      },
      777: {
        title: 'post two',
        body: 'my second post'
      }
    };

    const newState = reducer(initialState, deletePost(666));

    expect(newState).toEqual({
      777: {
        title: 'post two',
        body: 'my second post'
      }
    });
  });

  it('updates a post', () => {
    const initialState = {
      666: {
        title: 'post one',
        body: 'my first post'
      },
      777: {
        title: 'post two',
        body: 'my second post'
      }
    };

    const newState = reducer(initialState, updatePost(666, 'updated post'));

    expect(newState).toEqual({
      666: {
        title: 'post one',
        body: 'updated post'
      },
      777: {
        title: 'post two',
        body: 'my second post'
      }
    });
  });
});
