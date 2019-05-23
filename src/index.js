import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import { createPost, deletePost, updatePost } from './actions/postActions';
import { createComment, deleteComment } from './actions/commentAction';

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createPost('my title', 'post body', '666'));

store.dispatch(createPost('my title', 'post body', '777'));

store.dispatch(createComment('666', 'ABC', 'nice post!'));
store.dispatch(createComment('666', 'EFG', 'nice post!'));

// store.dispatch(deletePost('666'));

// store.dispatch(updatePost('777', 'updated body'));

// store.dispatch(createComment('777', 'ABC', 'nice post!'));
// store.dispatch(createComment('777', 'eee', 'nice post!'));

// store.dispatch(deleteComment('777', 'EEE'));



render(
  <p>REDUX</p>,
  document.getElementById('root')
);
