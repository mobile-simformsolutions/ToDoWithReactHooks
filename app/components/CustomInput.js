import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './Styles/CustomInputStyles';
import {Colors} from '../theme';

const CustomInput = ({placeholder, label, value, onChangeText, error}) => {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <>
      <View style={styles.inputBox}>
        {inputFocus === true && value !== '' && (
          <Text style={styles.label}>{label}</Text>
        )}
        <TextInput
          autoFocus={true}
          style={styles.inputText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholder}
          onChangeText={(text) => onChangeText(text)}
          onFocus={() => setInputFocus(true)}
        />
      </View>
      {error !== 'No Error' && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default CustomInput;
