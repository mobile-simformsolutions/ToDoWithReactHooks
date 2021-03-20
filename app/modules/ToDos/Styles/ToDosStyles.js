import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../theme';

let {screenWidth, screenHeight} = Metrics();

export default StyleSheet.create({
  fullButton: {
    alignSelf: 'center',
    marginTop: screenHeight * 0.03,
    width: screenWidth * 0.9,
  },
  editButton: {
    width: screenWidth * 0.16,
  },
  deleteButton: {
    width: screenWidth * 0.16,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: Colors.grey,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 3,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
    width: screenWidth * 0.44,
  },
  buttonsBg: {
    flexDirection: 'row',
  },
});
