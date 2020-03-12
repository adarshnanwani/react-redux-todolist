import React from 'react';
import { connect } from 'react-redux';
import useInputState from '../../hooks/useInputState';
import { updateTodo } from '../../actions/index';

const EditTodo = ({ text, id, toggleEdit, updateTodoHandler }) => {
  const [newText, updateNewText] = useInputState(text);
  const handleSave = () => {
    updateTodoHandler(id, newText);
    toggleEdit();
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <input type='text' value={newText} onChange={updateNewText} />
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateTodoHandler: (id, newText) => dispatch(updateTodo(id, newText))
  };
};

export default connect(null, mapDispatchToProps)(EditTodo);
