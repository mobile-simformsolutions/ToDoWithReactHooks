import React, {useState} from 'react';
import {View} from 'react-native';
import {ApplicationStyles} from '../../theme';
import styles from './Styles/ToDosStyles';
import {CustomButton, CustomInput} from '../../components';
import {Strings} from '../../constants';
import {connect} from 'react-redux';
import {addTodo, editTodo} from '../../redux/actions';

const AddEditToDo = ({
  addTodoItem,
  editTodoItem,
  todoItems,
  navigation,
  route,
}) => {
  const {editMode, todoValue} = route.params;
  const [todo, setTodo] = useState(todoValue ? todoValue : '');
  const [error, setError] = useState('');

  const onAddEdit = () => {
    if (todo.trim() !== '') {
      let newTodoArray = [];
      todoItems.map((item) => {
        newTodoArray.push(item.toLowerCase());
      });
      if (
        editMode === false &&
        newTodoArray.length > 0 &&
        newTodoArray.includes(todo.toLowerCase())
      ) {
        setError('Already Exist, please enter another value..!!');
      } else {
        editMode === true
          ? editTodoItem(todo, todoValue, todoItems)
          : addTodoItem(todo, todoItems);
        navigation.goBack();
      }
    } else {
      setError('Required Field..!!');
    }
  };

  return (
    <View style={ApplicationStyles.container}>
      <CustomInput
        value={todo}
        placeholder={'Enter Todo'}
        label={'Todo Item'}
        error={error}
        onChangeText={(text) => setTodo(text)}
      />
      <CustomButton
        theme={Strings.primary}
        title={editMode === true ? Strings.editTodo : Strings.addTodo}
        containerStyle={styles.fullButton}
        onClick={onAddEdit}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    todoItems: state.todos.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoItem: (todo, todoItems) => {
      dispatch(addTodo(todo, todoItems));
    },
    editTodoItem: (todo, todoOldValue, todoItems) => {
      dispatch(editTodo(todo, todoOldValue, todoItems));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEditToDo);
