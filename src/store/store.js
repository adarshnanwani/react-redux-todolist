import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
