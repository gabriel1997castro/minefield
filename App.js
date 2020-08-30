/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import params from './src/params';
import { Text, StyleSheet, View, Alert } from 'react-native';
import MineField from './src/components/MineField'
import { createMinedBoard, cloneBoard, openField, hasExplodedField, wonGame, showMines } from './src/gameController';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lose: false,
    }
  }

  openField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lose = hasExplodedField(board);
    const won = wonGame(board);

    if(lose) {
      showMines(board)
      Alert.alert('Perdeeeeeu!', 'Que buuuuurroo! Zero pra vc!');
    }
    if(won) {
      Alert.alert('Parabéns', 'Você venceu');
    }

    this.setState({ board, lose, won });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello mines</Text>
        <Text>Size of the grade:</Text>
          <Text>{params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
          <View style={this.state.board}>
            <MineField board={this.state.board} onOpenField={this.openField} />
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

