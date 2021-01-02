import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Timer from './components/Timer';
import CircularProgressbar from './components/CircularProgressbar';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Timer /> */}
      <CircularProgressbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
