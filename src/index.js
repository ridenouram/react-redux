import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/postReducer';
import { createPost, deletePost, updatePost } from './actions/postActions';

const store = createStore(reducer);



store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createPost('my title', 'post body', '666'));

store.dispatch(createPost('my title', 'post body', '777'));

store.dispatch(deletePost('666'));

store.dispatch(updatePost('777', 'updated body'));

render(
  <p>REDUX</p>,
  document.getElementById('root')
);
