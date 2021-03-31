import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Provider} from 'react-redux';
import AddEditTodoScreen from '../modules/ToDos/AddEditToDo';
import TodoListScreen from '../modules/ToDos/TodoList';
import {store} from '../redux/store';

const Stack = createStackNavigator();

const AppNavigation = () => (
  <Provider store={store}>
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
  </Provider>
);

export default AppNavigation;
