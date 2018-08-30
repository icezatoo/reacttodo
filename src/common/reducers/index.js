// @ts-nocheck
import { combineReducers } from 'redux';
import { TodoReducer } from './todoreducer';
import visibilityFilter from './visibilityFilter';
export default combineReducers({
  todolist: TodoReducer,
  visibilityFilter
});
