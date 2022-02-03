import initialState from './initialState';
import listsReducer from './listsReducer.js';
import { createStore, combineReducers } from 'redux';
import searchStringReducer from './searchStringReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;