import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/postReducer';
import { createPost } from './actions/postActions';

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createPost('my title', 'post body', '666'));

render(
  <p>REDUX</p>,
  document.getElementById('root')
);
