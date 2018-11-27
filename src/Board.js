import React, { Component } from 'react';
import Tile from './Tile';
import './Board.css';

const d = 4;

const getBoard = () => {
    let board = [];
    let max = d * d;
    // let max = 1;
    for(let i = 0; i < d; i++) {
      let row = [];
      for(let j = 0; j < d; j++) {
        if (i === d - 1 && j === d - 1) {
          row.push('_');
        } else {
          row.push(max - 1);
          max--;
          // row.push(max);
          // max++;
        }
      }
      board.push(row);
    }
    let temp = board[d - 1][d - 2];
    board[d - 1][d - 2] = board[d - 1][d - 3];
    board[d - 1][d - 3] = temp;
    // let temp = board[d - 1][d - 1];
    // board[d - 1][d - 1] = board[d - 1][d - 2];
    // board[d - 1][d - 2] = temp;
    return board;
};

const won = (board) => {
    let counter = 1;
      for(let i = 0; i < d; i++) {
        for(let j = 0; j < d; j++) {
          if (board[i][j] !== '_')
            if (board[i][j] - counter !== 0)
              return false;
            counter++;
        }
      }
    return true;
}

class Board extends Component {


  constructor(props) {
    super(props);
    this.state = {
      board: getBoard(),
      blankX: d - 1,
      blankY: d - 1
      // blankX: d - 1,
      // blankY: d - 2

    }
  }

  handleClick(tileX, tileY) {
    if (won(this.state.board)) return;
    if (this.canMove(tileX, tileY)) {
      this.props.handleMove();
      this.setState((state, props) => {
        let board = state.board.slice();
        board[state.blankX][state.blankY] = board[tileX][tileY];
        board[tileX][tileY] = '_';
        if (won(this.state.board)) {
          this.props.handleWon();
        }
        return {board: board, blankX: tileX, blankY: tileY};
      });
      
    }
  }

  won() {
    
  }

  /**
   * 
   * @param {number} x X position of the moving tile
   * @param {number} y Y position of the moving tile
   */
  canMove(x, y) {
    const tile = this.state.board[x][y];    
    let board = this.state.board.slice(); 
    if (board[this.state.blankX - 1] && board[this.state.blankX - 1][this.state.blankY] === tile) { // moving top tile
      return true;
    }
    if (board[this.state.blankX][this.state.blankY - 1] === tile) { // moving left tile
      return true;
    }
    if (board[this.state.blankX + 1] && board[this.state.blankX + 1][this.state.blankY] === tile) { // moving bottom tile
      return true;
    }
    if (board[this.state.blankX][this.state.blankY + 1] === tile) { // moving right tile
      return true;
    }
    return false; // invalid move
  }


  render() {
    return (
      <div>
        { this.state.board.map((row, rowIdx) => {
          return (
            <div
              className="row"
              key={rowIdx}>
              { row.map((value, colIdx) =>
                <Tile
                  className="tile"
                  key={colIdx}
                  onClick={() => this.handleClick(rowIdx, colIdx)}
                  value={value}/>
                )}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Board