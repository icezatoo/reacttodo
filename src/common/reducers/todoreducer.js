import * as TodoActions from '../actions/todo';
import { v4 as uuid } from 'uuid';
import { getformat } from '../conmon';
const Initstate = {
  isLoading: false,
  isLoadSuccess: false,
  todo: [],
  showdialog: false,
  datatodo: null
};

const initialtodo = {
  id: null,
  name: '',
  completed: false,
  timeformat: '',
  datenow: null,
  description: ''
};

export const TodoReducer = (state = Initstate, action) => {
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      const newdatatodo = [
        {
          ...initialtodo,
          id: uuid(),
          name: action.payload,
          datenow: new Date(),
          timeformat: getformat('hh:mm a')
        },
        ...state.todo
      ];
      return { ...state, todo: newdatatodo };
    }
    case TodoActions.REMOVE_TODO: {
      const removetodo = state.todo.filter(val => val.id !== action.payload);
      return { ...state, todo: [...removetodo] };
    }

    case TodoActions.TOGGLE_TODO: {
      const togogletodo = state.todo.map(
        val =>
          val.id === action.payload
            ? { ...val, completed: !val.completed }
            : val
      );
      return { ...state, todo: [...togogletodo] };
    }
    case TodoActions.UPDATE_TODO: {
      const { id } = action.payload;
      const updateTodo = state.todo.map(
        val => (val.id === id ? { ...action.payload } : val)
      );
      return { ...state, todo: [...updateTodo] };
    }

    case TodoActions.SHOW_DIALOG: {
      return { ...state, showdialog: true, datatodo: action.payload };
    }

    case TodoActions.CLOSE_DIALOG: {
      return { ...state, showdialog: false, datatodo: null };
    }

    case TodoActions.UPDATE_DATADIALOG: {
      const { id } = action.payload;
      const updatedatadialog = state.todo.map(
        val =>
          val.id === id
            ? {
                ...action.payload,
                datenow: new Date(),
                timeformat: getformat('hh:mm a')
              }
            : val
      );
      return {
        ...state,
        showdialog: false,
        datatodo: null,
        todo: [...updatedatadialog]
      };
    }

    default:
      return state;
  }
};
