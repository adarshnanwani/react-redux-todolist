import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const updateTodo = (id, text) => {
  return {
    type: UPDATE_TODO,
    id,
    text
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};
