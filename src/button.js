import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
    render() {
        return (
            <div onClick={this.props.onClick}
                 className="button"
                 value={this.props.value}>{this.props.label}</div>
        );
    }
}