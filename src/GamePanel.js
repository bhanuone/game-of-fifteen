import React, {Component} from 'react';
import './GamePanel.css';
import Board from './Board';

const GameInfo = (props) => {
    return (
      <div className="game-info">
        <div>
          Moves: <strong>{props.moves}</strong>
        </div>
        <div>
          <strong>{props.won ? 'You have solved the puzzle' : 'Not yet solved'}</strong>
        </div>
      </div>
    );
}
class GamePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      moves: 0,
      won: false
    }
  }

  handleMove() {
    this.setState((prevState, props) => ({
      moves: prevState.moves + 1
    }));
  }

  handleWon() {
    this.setState({
      won: true
    })
  }


  render() {
    return (
      <div className="game-panel">
        <Board
          handleWon={() => this.handleWon()}
          handleMove={() => this.handleMove()} />
        <GameInfo
          moves={this.state.moves}
          won={this.state.won} />
      </div>
    );
  }

}

export default GamePanel;