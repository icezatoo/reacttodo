export const GET_TODO = '[Get] Todo ';
export const ADD_TODO = '[Add] Todo';
export const REMOVE_TODO = '[Remove] Remove Todo';
export const FILTER_TODO = '[Filter] filter Todo';
export const TOGGLE_TODO = '[TOGGLE] Toggle Todo';

export const GetTodo = () => ({ type: GET_TODO });

export const AddTodolist = payload => ({
  type: ADD_TODO,
  payload
});

export const RemoveTodolist = payload => ({
  type: REMOVE_TODO,
  payload
});

export const FilterTodolist = payload => ({
  type: FILTER_TODO,
  payload
});

export const ToggleTodolist = payload => ({
  type: TOGGLE_TODO,
  payload
});
