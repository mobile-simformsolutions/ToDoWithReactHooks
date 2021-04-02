import {
  GET_TODO_ITEMS,
  ADD_TODO_ITEM,
  EDIT_TODO_ITEM,
  DELETE_TODO_ITEM,
} from '../types';

const initialState = {
  todos: [],
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_ITEMS:
      return state;
    case ADD_TODO_ITEM:
      return {...state, todos: action.payload.data};
    case EDIT_TODO_ITEM:
      return {...state, todos: action.payload.data};
    case DELETE_TODO_ITEM:
      console.log('DELETE_TODO_ITEM', action.payload.data);
      return {...state, todos: action.payload.data};
    default:
      return state;
  }
};

export default TodosReducer;
