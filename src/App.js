import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Field from './components/Field';
import params from './params';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Iniciando o Mines!!!</Text>
        <Text>
          Tamanho da grade: {params.getColumnsAmount()} x
          {params.getRowsAmmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
      </SafeAreaView>
    );
  }
}
