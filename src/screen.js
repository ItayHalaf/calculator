import React, { Component } from 'react';
import "./screen.css"

export default class Screen extends Component {
    render() {
        const str = this.props.expression.join('');
        return (
            <div className="screen"> {str}
            </div>
        );
    }
}