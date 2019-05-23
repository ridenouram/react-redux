import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentAction';

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

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return addProperty(state, action.payload.postId, { [action.payload.commentId]: { body: action.payload.commentBody } });
    case DELETE_COMMENT:
      return removeNestedProperty(state, action.payload.postId, action.payload.commentId);
    default:
      return state;
  }
}
