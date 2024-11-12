// // src/store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Corrected import for thunk
import authReducer from './src/reducers/authReducer';
import cartReducer from './src/reducers/cartReducer'; // Import your cart reducer

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer, // Add cart to your combined reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


