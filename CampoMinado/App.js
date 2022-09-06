import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import params from './src/params';
import MineField from './src/components/MineField';
import {creatMinedBoard} from './src/functions';

class App extends Component {
  constructor(props) {
    // Cria um objeto (no caso um tabuleiro)
    super(props);
    this.state = this.createState(); // Atribui a função de cria um tabuleiro como estado no state
  }

  minesAmount = () => {
    // Verifica a quantidade de minas que há no tabuleiro
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    // Cria um tabuleiro como estado
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return {
      board: creatMinedBoard(rows, cols, this.minesAmount()),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
});

export default App;
