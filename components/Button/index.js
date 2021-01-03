import React from 'react';
import PropTypes from 'prop-types';
import {Veiw, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({name, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon size={50} name={name} color={color} />
    </TouchableOpacity>
  );
};

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default Button;
