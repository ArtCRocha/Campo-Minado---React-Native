import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    // A propriedade board é referente ao tabuleiro que será criado pela função creatMinedBoard e a constante rows são as linhas, onde row é o item e r é o índice.
    const columns = row.map((field, c) => {
      // para cada uma das linhas eu vou ter fields, que são os campos minados.
      return <Field {...field} key={c} />; // Retorna o field, que é um objeto, em jsx.
    });

    return <View key={r}>{columns}</View>; // Representa todas as fields (campos) em formato jsx.
  });

  return <View style={styles.container}>{rows}</View>; // Representa todas as linhas em formato jsx.
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#EEE"
    }
});
