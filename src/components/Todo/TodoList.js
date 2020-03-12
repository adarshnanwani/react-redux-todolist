import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => <TodoItem key={todo.id} {...todo} />)
        ) : (
          <p>Please add a todo.</p>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, null)(TodoList);
