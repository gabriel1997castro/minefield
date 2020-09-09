import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MenuButton = (props) => {
  const { name, action } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}

export default MenuButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'maroon',
    height: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '1%'
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});