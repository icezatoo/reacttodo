export const GET_TODO = '[Get] Todo ';
export const ADD_TODO = '[Add] Todo';
export const REMOVE_TODO = '[Remove] Remove Todo';
export const TOGGLE_TODO = '[TOGGLE] Toggle Todo';
export const UPDATE_TODO = '[Update] Update Todo';
export const SHOW_DIALOG = '[SHOW] Show Dialog';
export const CLOSE_DIALOG = '[CLOSE] Close Dialog';
export const UPDATE_DATADIALOG = '[Update] Data Dialog';

export const AddTodolist = payload => ({
  type: ADD_TODO,
  payload
});

export const RemoveTodolist = payload => ({
  type: REMOVE_TODO,
  payload
});

export const ToggleTodolist = payload => ({
  type: TOGGLE_TODO,
  payload
});

export const Updatetodolist = payload => ({
  type: UPDATE_TODO,
  payload
});

export const ShowDialog = payload => ({
  type: SHOW_DIALOG,
  payload
});

export const CloseDialog = () => ({
  type: CLOSE_DIALOG
});

export const UpdatadataDialog = payload => ({
  type: UPDATE_DATADIALOG,
  payload
});
