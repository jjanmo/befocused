import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const CircularProgressbar = () => {
  const [fill, setFill] = useState(0);

  const timer = () => {
    setInterval(() => {
      setFill(fill + 1);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={300}
        width={5}
        fill={fill}
        tintColor="tomato"
        backgroundColor="#eee"
        onFillChange={(value) => timer()}>
        {(fill) => <Text style={styles.time}>{fill}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'white',
    fontSize: 70,
    color: 'tomato',
  },
});

export default CircularProgressbar;
