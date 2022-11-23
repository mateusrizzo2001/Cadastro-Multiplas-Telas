import React, { useState, useContext } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { CadastroContext } from './ContextoCadastro';
import { useNavigation } from '@react-navigation/native';

export default function Form() {
  const {
    codigo,
    setCodigo,
    descricao,
    setDescricao,
    preco,
    setPreco,
    quantidade,
    setQuantidade,
    setLista,
    codigos,
  } = useContext(CadastroContext);

  const navigation = useNavigation();

  const adicionar = () => {
    if (
      (codigo, descricao, preco, quantidade) !== '' &&
      (codigo, preco, quantidade) > 1 &&
      !codigos.includes(Number(codigo))
    ) {
      setLista((lista) => [
        ...lista,
        {
          codigo: codigo,
          descricao: descricao,
          preco: preco,
          quantidade: quantidade,
        },
      ]);
      limparImputs();
      navegarHome();
    } else {
      alert('Favor preencher os dados corretamente!');
      return;
    }
  };

  function limparImputs() {
    setCodigo('');
    setDescricao('');
    setPreco('');
    setQuantidade('');
  }

  function navegarHome() {
    navigation.navigate('Home');
  }
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={styles.container} 
    enabled={true}
    >
    <ScrollView style={{width: '100%'}}>
      <TextInput
        style={styles.camposImput}
        placeholderTextColor= '#dc143c'
        placeholder="Código"
        value={codigo}
        keyboardType="numeric"
        onChangeText={(valor) => {
          setCodigo(valor);
        }}
      />

      <TextInput
        style={styles.camposImput}
        placeholderTextColor= '#dc143c'
        placeholder="Descrição"
        value={descricao}
        onChangeText={(valor) => {
          setDescricao(valor);
        }}
      />

      <TextInput
        style={styles.camposImput}
        placeholderTextColor= '#dc143c'
        placeholder="Preço"
        value={preco}
        keyboardType="numeric"
        onChangeText={(valor) => {
          setPreco(valor);
        }}
      />

      <TextInput
        style={styles.camposImput}
        placeholderTextColor= '#dc143c'
        placeholder="Quantidade"
        value={quantidade}
        keyboardType="numeric"
        onChangeText={(valor) => {
          setQuantidade(valor);
        }}
      />

      <TouchableOpacity style={styles.button} onPress={adicionar}>
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    top: 20,
  },
  camposImput: {
    alignSelf: 'center',
    borderWidth: 2,
    marginBottom: 5,
    fontSize: 15,
    textAlign: 'center',
    width: '90%',
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#daa520',
    padding: 8,
    width: '90%',
    alignSelf: 'center',
  },
  textButton: {
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
