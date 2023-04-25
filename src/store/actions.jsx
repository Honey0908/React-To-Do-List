// store/actions.js
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS'

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, payload: id };
};
