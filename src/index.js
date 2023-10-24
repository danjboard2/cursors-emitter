"use strict"

import { swupTransitions } from './scripts/swup'
import { utils, getIndexPage } from './scripts/utils';
import { Cursor1 } from './scripts/cursors/cursor1';

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
