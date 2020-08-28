/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import params from './src/params';
import { Text, StyleSheet, View } from 'react-native';
import Field from './src/components/Field'

function App () {
  return (
    <View style={styles.container}>
      <Text>Hello mines</Text>
      <Text>Size of the grade:</Text>
        <Text>{params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
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
