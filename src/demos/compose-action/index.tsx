import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createReduxStore } from '@redux-model/react';
import Logic from './logic';
import '../../styles/style.scss';
import { createLogger } from 'redux-logger';

const store = createReduxStore({
  middleware: [
    createLogger({
      collapsed: true,
      diff: true,
      duration: true,
    }),
  ],
});

const div = document.createElement('div');
document.body.appendChild(div);

ReactDOM.render(
  <Provider store={store}>
    <Logic />
  </Provider>,
  div
);
