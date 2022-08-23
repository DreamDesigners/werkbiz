import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(
    combineReducers(rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
};