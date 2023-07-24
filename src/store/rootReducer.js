// Assume you have individual reducers for users and posts
import { combineReducers } from 'redux';
import usersReducer from '../store/userReducer';
//import postsReducer from './postsReducer';

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
