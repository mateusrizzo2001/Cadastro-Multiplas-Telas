import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { CadastroContext } from './ContextoCadastro';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { lista } = useContext(CadastroContext);
  const navigation = useNavigation();

  function buttonForm() {
    navigation.navigate('Formulário');
  }

  function showAlert(produto) {
    mensagem =
      'Código: ' +
      produto.codigo +
      '\nDescrição: ' +
      produto.descricao +
      '\nQuantidade: ' +
      produto.quantidade +
      '\nPreço: ' +
      produto.preco;
    Alert.alert('Produto', mensagem);
  }

  return (

    <View style={styles.container}>
      <FlatList
        style={styles.boxList}
        data={lista}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => showAlert(item)}>
            <Text style={styles.itemLista}>
              {'[' + item.codigo + ']' + ' - ' + item.descricao}
            </Text>
          </TouchableOpacity>
        )}
        
      />

      <TouchableOpacity style={styles.button} onPress={buttonForm}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  boxList: {
    paddingTop: 0,
    paddingHorizontal: 60,
    
  },
  itemLista: {
    borderBottomWidth: 2,
    padding: 5,
  
  },
  button: {
    borderRadius: 90,
    backgroundColor: 'green',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 8,
    alignSelf: 'flex-end',

  },
  textButton: {
    fontSize: 25,
    color: '#fff',
  },
});
