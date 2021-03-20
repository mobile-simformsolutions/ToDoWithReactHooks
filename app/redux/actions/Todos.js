import {
  GET_TODO_ITEMS,
  ADD_TODO_ITEM,
  EDIT_TODO_ITEM,
  DELETE_TODO_ITEM,
} from '../types';

export const getTodos = async (dispatch) => {
  dispatch({type: GET_TODO_ITEMS});
};

export const addTodo = (todo, todoItems) => async (dispatch) => {
  todoItems.push(todo);
  dispatch({type: ADD_TODO_ITEM, payload: {data: [...todoItems]}});
};

export const editTodo = (todo, todoOldValue, todoItems) => async (dispatch) => {
  const selectedIndex = todoItems.indexOf(todoOldValue);
  if (selectedIndex !== -1) {
    todoItems.splice(selectedIndex, 1, todo);
  }
  dispatch({type: EDIT_TODO_ITEM, payload: {data: [...todoItems]}});
};

export const deleteTodo = (todo, todoItems) => async (dispatch) => {
  const selectedIndex = todoItems.indexOf(todo);
  console.log('deleteTodo selectedIndex', selectedIndex);
  if (selectedIndex !== -1) {
    todoItems.splice(selectedIndex, 1);
  }
  dispatch({type: DELETE_TODO_ITEM, payload: {data: [...todoItems]}});
};
