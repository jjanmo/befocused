import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Timer from './components/Timer';
import reducer from './reducers/timerReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const App = () => {
  const store = createStore(reducer);
  console.log(store);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Timer />
      </View>
    </Provider>
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
