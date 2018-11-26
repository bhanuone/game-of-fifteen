import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {

  Infobar = (props) => (
    <div className="info">
      <label htmlFor="moves">
      </label>
    </div>
  )
  render() {
    return (
      <div className="app">
        <h1>Game of Fifteen</h1>
        <div className="game-panel">
          <Board />

        </div>
      </div>
    );
  }
}

export default App;
