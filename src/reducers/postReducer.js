import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
  posts: {}
};

function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}

function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: addProperty(state.posts, action.payload.id, { title: action.payload.title, body: action.payload.body }) };
    case DELETE_POST:
      return { ...state, posts: removeProperty(state.posts, action.payload) };
    default:
      return state;  
  }
}
