import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import AddEditTodoScreen from '../modules/ToDos/AddEditToDo';
import TodoListScreen from '../modules/ToDos/TodoList';

const Stack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={'TodoListScreen'}>
      <Stack.Screen name="TodoListScreen" component={TodoListScreen} />
      <Stack.Screen
        name="AddEditTodoScreen"
        component={AddEditTodoScreen}
        initialParams={{editMode: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
