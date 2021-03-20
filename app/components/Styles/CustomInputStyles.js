import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

let {screenWidth} = Metrics();

export default StyleSheet.create({
  inputBox: {
    width: screenWidth * 0.9,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: Colors.placeholder,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  inputText: {fontSize: 16, color: Colors.inputText},
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: Colors.placeholder,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 5,
    width: screenWidth * 0.9,
    alignSelf: 'center',
  },
});
