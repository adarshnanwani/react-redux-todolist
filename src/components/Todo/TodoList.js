import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import FilterLinks from './FilterLinks';
import { filters } from '../../actions/actionTypes';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <FilterLinks />
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => <TodoItem key={todo.id} {...todo} />)
        ) : (
          <p>There's nothing here.</p>
        )}
      </ul>
    </div>
  );
};

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed !== true);
    case filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed === true);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getFilteredTodos(state.todos, state.filter)
  };
};

export default connect(mapStateToProps, null)(TodoList);
