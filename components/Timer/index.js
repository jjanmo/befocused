import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Timer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.time}>25:00</Text>
      </View>
      <View style={styles.button}>
        <Text>Button here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  timer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'white',
    fontSize: 90,
    color: 'tomato',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Timer;
