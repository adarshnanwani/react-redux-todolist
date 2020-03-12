import React from 'react';
import { connect } from 'react-redux';
import EditTodo from './EditTodo';
import { deleteTodo } from '../../actions/index';
import useToggleState from '../../hooks/useToggleState';

const TodoItem = props => {
  const { text, id, deleteTodoHandler } = props;
  const [edit, toggleEdit] = useToggleState();
  const handleDelete = () => {
    deleteTodoHandler(id);
  };
  const handleEdit = () => {
    toggleEdit();
  };

  const viewTodo = (
    <div>
      <label>
        <input type='checkbox' /> {text}
      </label>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );

  const editTodo = <EditTodo text={text} id={id} toggleEdit={toggleEdit} />;

  const output = edit ? editTodo : viewTodo;

  return output;
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodoHandler: id => dispatch(deleteTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
