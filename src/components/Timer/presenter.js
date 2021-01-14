//short explaination about presenter file
//just for presenting for something
//do NOT use redux or something logical

import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomHooks from '../../hooks';
import {setTimeFormat} from '../../utils/formats';
import Button from '../Button';

const Timer = ({
  isPlaying,
  elapsedTime,
  timerDuration,
  startTimer,
  restartTimer,
  addSecond,
}) => {
  const interval = useRef(null);
  const prevIsPlaying = CustomHooks.usePrevious(isPlaying);

  useEffect(() => {
    if (isPlaying && !prevIsPlaying) {
      interval.current = setInterval(() => {
        addSecond();
      }, 1000);
    } else if (!isPlaying && prevIsPlaying) {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [isPlaying]);

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={!isPlaying ? styles.tomato : styles.blue}>
          {setTimeFormat(timerDuration - elapsedTime)}
        </Text>
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
