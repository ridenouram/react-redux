import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = {
  posts: {}
};

function removeProperty(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function addProperty(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function updatePostBody(obj, key, newBody) {
  const newObj = { ...obj };
  let post = newObj[key];
  post.body = newBody;
  newObj[key] = post;
  return newObj;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: addProperty(state.posts, action.payload.id, { title: action.payload.title, body: action.payload.body }) };
    case DELETE_POST:
      return { ...state, posts: removeProperty(state.posts, action.payload) };
    case UPDATE_POST:
      return { ...state, posts: updatePostBody(state.posts, action.payload.id, action.payload.body) };
    default:
      return state;  
  }
}
