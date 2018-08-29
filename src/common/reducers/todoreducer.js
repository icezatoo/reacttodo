import * as TodoActions from '../actions/todo';
import { v4 as uuid } from 'uuid';
import { getformat } from '../conmon';
const Initstate = {
  isLoading: false,
  isLoadSuccess: false,
  todo: [],
  lengthdata: 0,
  filter: 'ALL'
};

const initialtodo = {
  id: null,
  name: '',
  completed: false,
  dateformat: ''
};

export const TodoReducer = (state = Initstate, action) => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      const newdatatodo = [
        { ...initialtodo, id: uuid(), name: action.payload , dateformat : getformat('hh:mm a')  },
        ...state.todo
      ];
      return { ...state, todo: newdatatodo, isLoading: false };
    case TodoActions.REMOVE_TODO:
      const todolist = state.todo;
      const removetodo = todolist.filter(val => val.id !== action.payload);
      return { ...state, todo: removetodo, isLoading: false };
    default:
      return state;
  }
};
