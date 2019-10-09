import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import usersReducer from './users/reducer';

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
    users: usersReducer,
});

console.log(initialState, applyMiddleware(...middleware));
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
