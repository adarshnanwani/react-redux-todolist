import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/index';

const TodoItem = props => {
  const { text, id, deleteTodoHandler } = props;
  const handleDelete = () => {
    deleteTodoHandler(id);
  };
  return (
    <div>
      <label>
        <input type='checkbox' /> {text}
      </label>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodoHandler: id => dispatch(deleteTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
