import ListItemTodo from '../component/list/ListItemtodo';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../common/actions/filtertodo';
import {
  ToggleTodolist,
  RemoveTodolist,
  ShowDialog
} from '../common/actions/todo';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(val => val.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(val => !val.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todolist.todo, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  ToggleTodolist: id => dispatch(ToggleTodolist(id)),
  RemoveTodolist: id => dispatch(RemoveTodolist(id)),
  ShowDialog: valuetodo => dispatch(ShowDialog(valuetodo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItemTodo);
