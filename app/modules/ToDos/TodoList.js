import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {ApplicationStyles} from '../../theme';
import styles from './Styles/ToDosStyles';
import {CustomButton} from '../../components';
import {Strings} from '../../constants';
import {connect} from 'react-redux';
import {getTodos, deleteTodo} from '../../redux/actions';

const RenderButton = ({navigation}) => (
  <CustomButton
    theme={Strings.primary}
    title={Strings.addTodo}
    containerStyle={styles.fullButton}
    onClick={() => navigation.navigate('AddEditTodoScreen')}
  />
);

const RenderItem = ({item, todoItems, navigation, deleteTodoItem}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item}</Text>
      <View style={styles.buttonsBg}>
        <CustomButton
          theme={Strings.secondary}
          title={Strings.edit}
          containerStyle={styles.editButton}
          onClick={() =>
            navigation.navigate('AddEditTodoScreen', {
              todoValue: item,
              editMode: true,
            })
          }
        />
        <CustomButton
          theme={Strings.secondary}
          title={Strings.delete}
          containerStyle={styles.deleteButton}
          onClick={() => deleteTodoItem(item, todoItems)}
        />
      </View>
    </View>
  );
};

const TodoList = ({navigation, getTodoItems, deleteTodoItem, todoItems}) => {
  useEffect(() => {
    getTodoItems();
  }, [getTodoItems]);

  return (
    <View style={ApplicationStyles.container}>
      <FlatList
        data={todoItems}
        renderItem={({item}) => (
          <RenderItem
            item={item}
            todoItems={todoItems}
            navigation={navigation}
            deleteTodoItem={deleteTodoItem}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={() => <RenderButton navigation={navigation} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    todoItems: state.todos.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoItems: () => {
      dispatch(getTodos);
    },
    deleteTodoItem: (item, todoItems) => {
      dispatch(deleteTodo(item, todoItems));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
