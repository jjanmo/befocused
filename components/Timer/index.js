import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Button';

const Timer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.time}>25:00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          name="play-circle-o"
          color="tomato"
          onPress={() => alert('play')}
        />
        <Button
          name="stop-circle-o"
          color="dodgerblue"
          onPress={() => alert('stop')}
        />
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Timer;
