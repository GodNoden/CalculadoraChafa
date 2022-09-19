/* eslint-disable prettier/prettier */
import {parse} from '@babel/core';
import React, {Component, useState} from 'react';
import {Button, View, Text, TextInput, StyleSheet} from 'react-native';

export default function Calculadora() {
  // this.state = {
  //   numberA: '',
  //   numberB: '',
  //   numberC: '',
  // };
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [numberC, setNumberC] = useState(0);

  const btnClickPlus = () => {
    console.log(parseFloat(numberA) + parseFloat(numberB));
    setNumberC(parseFloat(numberA) + parseFloat(numberB));
  };
  const btnClickTimes = () => {
    console.log(parseFloat(numberA) * parseFloat(numberB));
    setNumberC(parseFloat(numberA) * parseFloat(numberB));
  };
  const btnClickMinus = () => {
    console.log(parseFloat(numberA) - parseFloat(numberB));
    setNumberC(parseFloat(numberA) - parseFloat(numberB));
  };
  const btnClickDivided = () => {
    console.log(parseFloat(numberA) / parseFloat(numberB));
    if (numberB == 0) {
      setNumberC('Can not divide 0');
    } else {
      setNumberC(parseFloat(numberA) / parseFloat(numberB));
    }
  };

  return (
    <View>
      <Text>Calculadora</Text>
      <TextInput
        placeholder="Numero A"
        style={styles.input}
        onChangeText={val => setNumberA(val)}
      />
      <TextInput
        placeholder="Numero B"
        style={styles.input}
        onChangeText={val => setNumberB(val)}
      />
      <View style={styles.rowContent}>
        <View style={styles.viewButton}>
          <Button style={styles.button} title="+" onPress={btnClickPlus} />
        </View>
        <View style={styles.viewButton}>
          <Button style={styles.button} title="-" onPress={btnClickMinus} />
        </View>
        <View style={styles.viewButton}>
          <Button style={styles.button} title="x" onPress={btnClickTimes} />
        </View>
        <View style={styles.viewButton}>
          <Button style={styles.button} title="/" onPress={btnClickDivided} />
        </View>
      </View>

      <Text style={styles.texto} >{numberC}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    fontSize: 30,
    marginTop: 20,
  },
  viewButton: {
    width: 98,
    padding: 10,
  },
  rowContent: {
    flexDirection: 'row',
  },
  texto: {
    fontSize: 50,
    color: 'blue',
    textAlign: 'center',
  },
});
