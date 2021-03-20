import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export default StyleSheet.create({
  primaryButton: {
    height: 44,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  secondaryButton: {
    height: 32,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.blue,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  primaryTitle: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '800',
  },
  secondaryTitle: {
    color: Colors.blue,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
