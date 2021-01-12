import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({name, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon size={100} name={name} color={color} />
    </TouchableOpacity>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Button;
