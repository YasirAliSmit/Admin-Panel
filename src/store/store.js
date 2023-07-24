// Import necessary functions and middleware
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'; // Assuming you have a rootReducer that combines all reducers

// Create the store with middleware (thunk)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
