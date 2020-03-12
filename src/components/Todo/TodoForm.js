import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';
import useInputState from '../../hooks/useInputState';

const TodoForm = props => {
  const [text, updateText, resetText] = useInputState('');
  const addTodoHandler = e => {
    e.preventDefault();
    props.addTodoHandler(text);
    resetText();
  };
  return (
    <div>
      <h2>Todo Form</h2>
      <form onSubmit={addTodoHandler}>
        <label>Todo:</label>
        <input type='text' value={text} onChange={updateText} />
        <input type='submit' value='Add Todo' />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoHandler: text => dispatch(addTodo(text))
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
