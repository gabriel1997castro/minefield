/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import params from '../params';
import { StyleSheet, View, Alert } from 'react-native';
import MineField from './MineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplodedField,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from '../gameController';
import Header from './Header';
import Level from '../screens/Level';

export default class Game extends Component {
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
      showLevelSelection: false,
    }
  }

  openField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lose = hasExplodedField(board);
    const won = wonGame(board);

    if (lose) {
      showMines(board)
      Alert.alert('Perdeeeeeu!', 'Que buuuuurroo! Zero pra vc!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu');
    }

    this.setState({ board, lose, won });
  }

  onFlagField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você venceu');
    }

    this.setState({ board, won });
  }

  onLevelSelect = level => {
    params.difficultLevel = level;
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <Level
          isVisible={this.state.showLevelSelection}
          onLevelSelect={this.onLevelSelect}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <Header 
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.openField}
            onFlagField={this.onFlagField}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

