import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Strings} from '../constants';
import styles from './Styles/CustomButtonStyles';

const RenderPrimaryButton = ({title, containerStyle, onClick}) => (
  <TouchableOpacity
    style={[styles.primaryButton, containerStyle]}
    onPress={onClick}>
    <Text style={styles.primaryTitle}>{title}</Text>
  </TouchableOpacity>
);

const RenderSecondaryButton = ({title, containerStyle, onClick}) => (
  <TouchableOpacity
    style={[styles.secondaryButton, containerStyle]}
    onPress={onClick}>
    <Text style={styles.secondaryTitle}>{title}</Text>
  </TouchableOpacity>
);

const CustomButton = ({theme, title, containerStyle, onClick}) => {
  switch (theme) {
    case Strings.primary:
      return (
        <RenderPrimaryButton
          title={title}
          containerStyle={containerStyle}
          onClick={onClick}
        />
      );
    case Strings.secondary:
      return (
        <RenderSecondaryButton
          title={title}
          containerStyle={containerStyle}
          onClick={onClick}
        />
      );
  }
};

export default CustomButton;
