import React from 'react';
import { connect } from 'react-redux';
import EditTodo from './EditTodo';
import { deleteTodo, toggleTodo } from '../../actions/index';
import useToggleState from '../../hooks/useToggleState';

const TodoItem = props => {
  const { text, id, completed, deleteTodoHandler, toggleTodoHandler } = props;
  const [edit, toggleEdit] = useToggleState();
  const handleDelete = () => {
    deleteTodoHandler(id);
  };
  const handleEdit = () => {
    toggleEdit();
  };

  const handleCompleted = e => {
    toggleTodoHandler(id);
  };

  const viewTodo = (
    <div>
      <label>
        <input type='checkbox' onChange={handleCompleted} checked={completed} />
        {text}
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
    deleteTodoHandler: id => dispatch(deleteTodo(id)),
    toggleTodoHandler: id => dispatch(toggleTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
