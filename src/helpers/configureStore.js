import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../reducers';

const enhancer = applyMiddleware(promise);

export default (initialState) => createStore(rootReducer, initialState, enhancer);
