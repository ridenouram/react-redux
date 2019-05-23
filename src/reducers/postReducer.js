import { CREATE_POST } from '../actions/postActions';

const initialState = {
  posts: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: { ...state.posts, [action.payload.id]:{ title: action.payload.title, body: action.payload.body } } };
  }
}
