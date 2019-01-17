import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

const middleware = applyMiddleware(promise(), thunk);

export default createStore(reducers, middleware);
