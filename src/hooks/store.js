import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cakeReducer from './cakes/reducer';

const store = createStore(cakeReducer, applyMiddleware(thunk));

export default store;
