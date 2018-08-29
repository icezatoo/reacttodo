import { combineReducers } from 'redux';
import { TodoReducer } from './todoreducer';

export default combineReducers({
  todolist: TodoReducer
});
