import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default function Field(props) {
  const {mined, opened, nearMines, explosed, flagged} = props; // Estados do campo recebidos via props

  const styleField = [styles.field]; // Estado do camp

  if (opened) styleField.push(styles.opened); // Se opened existir aplique o estilo opened

  if (explosed) styleField.push(styles.explosed); // Se opened existir aplique o estilo explosed

  if(flagged) styleField.push(styles.flagged) // Se flagged existir aplique o estilo flagged e regular

  if (!opened && !explosed) styleField.push(styles.regular); // Se existir apenas um estilo, aplique o regular por padrão

  let color = null; // Cor da label

  if (nearMines > 0) {
    // Verifica se a quantidade de campos em volta é maior que zero
    if (nearMines == 1) color = '#2A28D7'; // Se a quantidade de campos em volta for igual a 1, aplique a seguinte cor na label
    if (nearMines == 2) color = '#2B520F'; //Se a quantidade de campos em volta for igual a 2, aplique a seguinte cor na label
    if (nearMines > 2 && nearMines < 6) color = '#F9060A'; //Se a quantidade de campos em volta for maior que 2 e menor que 6, aplique a seguinte cor na label
    if (nearMines >= 6) color = '#f221A9'; //Se a quantidade de campos em volta for maior ou igual a 6, aplique a seguinte cor na label
  }

  return (
    <View style={styleField}>
      {
        !mined && opened && nearMines > 0 ? ( // verifica se o campo não está minado, se está aberto e se há minas em volta
          <Text style={[styles.label, {color: color}]}>{nearMines}</Text> // Se sim aplique esse estilo na label
        ) : (
          false
        ) // Caso contrário retorne falso
      }

      {
        mined && opened ? <Mine /> : false // Verifica se o campo está minado e aberto, se estiver renderiza o componente Mine ( Mina )
      }

      {
        flagged && !opened ? <Flag/> : false // Verifica de está marcado como flag e se está fechado, se estiver renderiza a flag.
      }

    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    width: params.blockSize,
    height: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderBottomColor: '#333',
    borderRightColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: params.fontSize,
    fontWeight: 'bold',
  },
  explosed: {
    backgroundColor: "red",
    borderColor: "red"
  }
});
