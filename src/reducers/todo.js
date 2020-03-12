import { v4 as uuid } from 'uuid';
import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO
} from '../actions/todos';

const initialState = [];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.text = action.text;
        }
        return todo;
      });
    default:
      return state;
  }
}

export default todoReducer;
