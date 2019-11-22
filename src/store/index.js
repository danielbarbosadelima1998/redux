import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from "./ducks";


const Store = createStore(
  rootReducers,
  composeWithDevTools()
  );

export default Store;