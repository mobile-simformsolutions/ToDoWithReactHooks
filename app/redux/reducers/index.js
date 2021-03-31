// Copyright (c) 2020-2021 by Pulse Secure, LLC. All rights reserved
import {combineReducers} from 'redux';
import TodosReducer from './Todos';

const rootReducer = combineReducers({
  todos: TodosReducer,
});

export default rootReducer;
