import React from 'react';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';

const TodoHome = () => {
  return (
    <div className='TodoHome'>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoHome;
