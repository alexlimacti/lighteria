/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ListaProdutos from './views/ListaProdutos';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  containerDescricao: {
    paddingHorizontal: 16,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 24,
    backgroundColor: '#F4F0F4',
    color: '#A1A5AA',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});

export default App;
