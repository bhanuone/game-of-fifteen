import React, { Component } from 'react';
import './Tile.css';
class Tile extends Component {
  
  render() {
    return (
      <div className="tiles" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }

}

export default Tile