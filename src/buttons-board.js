import React, { Component } from 'react';
import './buttons-board.css';

export default class ButtonsBoard extends Component {
    render() {
        return (
          <div className="buttons-board">{this.props.children}</div>  
        );
    }
}