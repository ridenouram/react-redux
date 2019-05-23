export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const createPost = (title, body, id) => ({
  type: CREATE_POST,
  payload: {
    id: id,
    title: title,
    body: body
  }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

export const updatePost = (id, body) => ({
  type: UPDATE_POST,
  payload: {
    id: id,
    body: body
  }
});
