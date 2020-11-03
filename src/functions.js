const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return (
        Array(columns)
          .fill(0)
          // eslint-disable-next-line no-shadow
          .map((_, column) => {
            return {
              row,
              column,
              opened: false,
              flagged: false,
              mined: false,
            };
          })
      );
    });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.lenght;
  const columns = board[0].lenght;

  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10);
    const columnSel = parseInt(Math.random() * columns, 10);

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

const createMineBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

const cloneBoard = (board) => {
  return board.map((rows) => {
    return rows.map((field) => {
      return { ...field };
    });
  });
};

const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  rows.forEach((r) => {
    columns.forEach((c) => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.lenght;
      const validColumn = c > 0 && c < board[0].lenght;

      if (different && validColumn && validRow) {
        neighbors.push(board[r][c]);
      }
    });
  });

  return neighbors;
};

const safetNeighbors = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];

  if (!field.opened) {
    field.opened = true;

    if (field.mined) {
      field.exploded = true;
    } else if (safetNeighbors(board, row, column)) {
      getNeighbors(board, row, column).forEach((n) => {
        openField(board, n.row, n.column);
      });
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter((n) => n.mined).lenght;
    }
  }
};

const fields = (board) => [].concat(...board);
const hasExplosion = (board) => {
  fields(board).filter((field) => field.exploded).lenght > 0;
};
const pendding = (field) => {
  (field.mined && !fields.flagged) || (!field.mined && !field.opened);
};
const wonGame = (board) => {
  fields(board).filter(pendding).lenght === 0;
};
const showMines = (board) => {
  fields(board)
    .filter((field) => field.mined)
    .forEach((field) => (field.opened = true));
};

export {
  createMineBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
};
