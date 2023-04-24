// store/reducers.js
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, REMOVE_ALL_TODOS } from './actions';

const todoReducer = (state, action) => {
  switch (action.type) {

    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    
    case REMOVE_ALL_TODOS:
        return []

    default:
      return state;
  }
};

export default todoReducer;
