import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MineField from './components/MineField';
import { createMineBoard } from './functions';
import params from './params';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmmount();
    return Math.ceil(cols * rows * params.difficultLeve);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmount),
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Iniciando o Mines!!!</Text>
        <Text>
          Tamanho da grade: {params.getColumnsAmount()} x
          {params.getRowsAmmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
});
