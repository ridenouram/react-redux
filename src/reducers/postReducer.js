import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = {};

function removeProperty(state, key) {
  const newState = { ...state };
  delete newState[key];
  return newState;
}

function addProperty(state, key, value) {
  const newState = { ...state };
  newState[key] = value;
  return newState;
}

function updatePostBody(state, key, newBody) {
  const newPost = { ...state[key], body: newBody };
  const newState = { ...state, [key]: newPost };
  return newState;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return addProperty(state, action.payload.id, { title: action.payload.title, body: action.payload.body });
    case DELETE_POST:
      return removeProperty(state, action.payload);
    case UPDATE_POST:
      return updatePostBody(state, action.payload.id, action.payload.body);
    default:
      return state;  
  }
}
