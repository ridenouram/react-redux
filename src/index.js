import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/postReducer';
import { createPost, deletePost } from './actions/postActions';

const store = createStore(reducer);


console.log('before all', store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createPost('my title', 'post body', '666'));
console.log('666 added', store.getState());
store.dispatch(createPost('my title', 'post body', '777'));
console.log('666 and 777', store.getState());
store.dispatch(deletePost('666'));
console.log('666 removed', store.getState());

render(
  <p>REDUX</p>,
  document.getElementById('root')
);
