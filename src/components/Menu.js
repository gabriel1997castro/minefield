import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MenuButton from './MenuButton';

const Menu = props => {
  const { handleShowGame } = props;

  return (
    <View style={styles.container}>
      <MenuButton name='Novo Jogo' action={handleShowGame} />
      <MenuButton name='Nível' />
      <MenuButton name='Instruções' />
    </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});