import { createPost, CREATE_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from './postActions'; 

describe('post actions', () => {
  it('creates a post', () => {
    expect(createPost('title', 'body')).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'title',
        body: 'body'
      }
    });
  });

  it('deletes a post', () => {
    expect(deletePost('id')).toEqual({
      type: DELETE_POST,
      payload: 'id'
    });
  });

  it('updates a post', () => {
    expect(updatePost('id', 'body')).toEqual({
      type: UPDATE_POST,
      payload: {
        id: 'id',
        body: 'body'
      }
    });
  });
});
