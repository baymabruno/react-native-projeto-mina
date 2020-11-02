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
      </SafeAreaView>
    );
  }
}
