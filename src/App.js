import React, { Component } from 'react';
import './App.css';
import GamePanel from './GamePanel';

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
        <h1 className="app-title">Game of Fifteen</h1>
        <GamePanel />
      </div>
    );
  }
}

export default App;
