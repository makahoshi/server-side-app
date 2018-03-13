import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

//this is where we combine all of the reducers using the combineReducers function from redux

export default combineReducers({
   users: usersReducer
});