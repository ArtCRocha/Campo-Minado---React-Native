const createBoard = (rows, columns) => {
  //Cria um tabuleiro, recebe o numero de linhas (rows) e o numero de colunas (columns)
  return Array(rows).fill(0).map((_, row) => {
      // Cria um array de acordo com o numero de linhas, ignorando o elemento, pegando apenas o indice
      return Array(columns).fill(0).map((_, column) => {
          // Cria um array de acordo com o numero de colunas, ignorando o elemento, pegando apenas o indice
          return {
            // retorna um objeto com a linha, coluna e propriedades respectivamente
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};


const spreadMines = (board, minesAmount) => {
  // Cria uma função para espalhar as minas, que recebe um tabuleiro e o numero de minas que deve ser espalhadas nesse tabuleiro
  const rows = board.length; // pega a quantidade de linhas que há no tabuleiro
  const columns = board[0].length; // pega a quantidade de colunas que há no tabuleiro
  let minesPlanted = 0; // quantidade de minas plantadas (começa com zero)

  while (minesPlanted < minesAmount) {
    // Enquanto o numero de minas plantadas for menor que o numero de minas que devem ser espalhadas faz:
    const rowSel = parseInt(Math.random() * rows, 10); // Seleciona uma linha aleatória do tabuleiro
    const columnSel = parseInt(Math.random() * columns, 10); // Seleciona uma coluna aleatória do tabuleiro

    if (!board[rowSel][columnSel].mined) {
      // verifica se a linha e coluna selecionada não está minada
      board[rowSel][columnSel].mined = true; // Se não estiver minada, passa a ser minada
      minesPlanted++; // O numero de minas plantadas aumenta mais 1
    }
  }
};

const creatMinedBoard = (rows, columns, minesAmount) => {
  // Cria um tabuleiro já com as minas plantadas, recebendo as linhas, colunas e quantidade de minas espalhadas

  const board = createBoard(rows, columns); // board recebe a função de criar um tabuleiro
  spreadMines(board, minesAmount); // A função espalhar minas é chamada, recebendo o tabuleiro criado acima e recebendo a quantidade de minas a ser espalhada

  return board; // retorna o tabuleiro criado com todas as funções antes definidas
};

export {creatMinedBoard}; // Exporta a função para que ela possa ser utilizada em outro documento
