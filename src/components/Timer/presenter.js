//short explaination about presenter file
//just for presenting for something
//do NOT use redux or something logical

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Button';

const Timer = ({
  isPlaying,
  elapsedTime,
  timerDuration,
  startTimer,
  restartTimer,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={!isPlaying ? styles.tomato : styles.blue}>25:00</Text>
      </View>
      <View style={styles.buttonContainer}>
        {!isPlaying && (
          <Button name="play-circle-o" color="tomato" onPress={startTimer} />
        )}
        {isPlaying && (
          <Button
            name="stop-circle-o"
            color="dodgerblue"
            onPress={restartTimer}
          />
        )}
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
  tomato: {
    fontSize: 90,
    color: 'tomato',
  },
  blue: {
    fontSize: 90,
    color: 'dodgerblue',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Timer;
