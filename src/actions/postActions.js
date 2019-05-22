export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const createPost = (title, body) => ({
  type: CREATE_POST,
  payload: {
    title: title,
    body: body
  }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});


