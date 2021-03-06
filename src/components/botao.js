/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  LIGHTBLUE,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../styles/styles';

export const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.botaoContainer}>
        <Text style={style.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  botaoContainer: {
    backgroundColor: LIGHTBLUE,
    padding: 20,
    borderRadius: 6,
  },
  texto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});
