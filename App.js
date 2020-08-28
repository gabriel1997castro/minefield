/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import params from './src/params';
import { Text, StyleSheet, View } from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text>Hello mines</Text>
      <Text>Size of the grade:</Text>
  <Text>{params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
