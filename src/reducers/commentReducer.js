import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentAction';
import { DELETE_POST } from '../actions/postActions';

const initialState = {};

function addProperty(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function removeNestedProperty(obj, key, innerKey) {
  const newObj = { ...obj };
  delete newObj[key][innerKey];
  return newObj;
}

function removeProperty(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return addProperty(state, action.payload.postId, { [action.payload.commentId]: { body: action.payload.commentBody } });
    case DELETE_COMMENT:
      return removeNestedProperty(state, action.payload.postId, action.payload.commentId);
    case DELETE_POST:
      return removeProperty(state, action.payload);
    default:
      return state;
  }
}
