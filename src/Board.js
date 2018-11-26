import React, { Component } from 'react';
import Tile from './Tile';
import './Board.css';

const d = 4;

class Board extends Component {


  constructor(props) {
    super(props);
    let board = [];
    let max = d * d;
    for(let i = 0; i < d; i++) {
      let row = [];
      for(let j = 0; j < d; j++) {
        if (i === d - 1 && j === d - 1) {
          row.push('_');
        } else {
          row.push(max - 1);
          max--;
        }
      }
      board.push(row);
    }
    let temp = board[d - 1][d - 2];
    board[d - 1][d - 2] = board[d - 1][d - 3];
    board[d - 1][d - 3] = temp;
    this.state = {
      board: board,
      blank_i: d - 1,
      blank_j: d - 1
    }
  }

  handleClick(i, j) {
    alert(this.state.board[i][j]);
  }

  won() {
    let counter = 1;
    for(let i = 0; i < d; i++) {
      for(let j = 0; j < d; j++) {
        if (this.state.board[i][j] !== '_')
          if (this.state.board[i][j] - counter !== 0)
            return false;
          counter++;
      }
    }
    return true;
  }

  canMove(i, j) {
    
  }


  render() {
    return (
      <div>
        { this.state.board.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className="tiles-row">
              { row.map((value, colIdx) =>
                <Tile
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