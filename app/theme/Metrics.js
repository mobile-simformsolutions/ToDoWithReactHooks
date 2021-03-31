import {Dimensions} from 'react-native';

const Metrics = () => {
  const {width, height} = Dimensions.get('window');
  return {screenWidth: width, screenHeight: height};
};

export default Metrics;
