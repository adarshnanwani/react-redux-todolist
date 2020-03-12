import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoHome = () => {
  return (
    <div className='TodoHome'>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoHome;