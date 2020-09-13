
import createStore from 'storeon';

import peoples from './peoples';

export const store = createStore([
  peoples,
  process.env.NODE_ENV !== 'production' && require('storeon/devtools')
]);
