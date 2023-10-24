"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import { swupTransitions } from './scripts/swup'
import { utils, getIndexPage } from './scripts/utils';
import { Cursor1 } from './scripts/cursors/cursor1';
import App from '../src/index.jsx';

export const setCursor = () => {
  const index = getIndexPage();
  switch (index) {
    case 1:
      new Cursor1(index);
      break;
    default:
  }
}

window.addEventListener('load', async () => {
  await utils();
  swupTransitions();
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);