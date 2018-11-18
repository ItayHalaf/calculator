import React, { Component } from 'react';
import Screen from "./screen.js";
import ButtonsBoard from "./buttons-board.js";
import Button from "./button.js";
import './calculator.css';
import update from 'immutability-helper';
import * as math from 'mathjs';

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {expression: []}
        this.valid = false;
    }
    calculateOperations = () => {
        let result = this.state.expression.join("")
        if (result) {
            result = math.eval(result)
            result = math.format(result, {precision: 14})
            result = String(result)
            this.setState ({
                expression: [result]
            })
        }
    }

    handleClick = e => {
        var value = e.target.getAttribute("value");
        console.log(this.valid);
        switch (value){
            case "clear":
                this.setState({
                    expression: []
                })
                if (this.valid) {
                    this.valid = false;
                }
                break
            case "/":
            case "*":
            case "-":
            case "+":
                if (this.valid) {
                    var newExpression = update(this.state.expression, {
                        $splice: [[this.state.expression.length - 1, 1, value]]
                    })
                    this.setState({
                        expression: newExpression
                    })
                    
                } else {
                    var newExpression = update(this.state.expression, {
                        $push: [value]
                    })
                    this.setState({
                        expression: newExpression
                    })
                    this.valid = true;
                }
                break
            case "equal":
                if (this.valid) {
                    alert("invalid expression");
                } else {
                    this.calculateOperations()
                }
                break
            default:
                var newExpression = update(this.state.expression, {
                    $push: [value]
                })
                this.setState({
                    expression: newExpression
                })
                this.valid = false;
                break
        }
    }
    render() {
        return (
            <div className="calc">
                <Screen expression={this.state.expression}/>
                <ButtonsBoard>
                    <Button onClick={this.handleClick} label="7" value="7" />
                    <Button onClick={this.handleClick} label="8" value="8" />
                    <Button onClick={this.handleClick} label="9" value="9" />
                    <Button onClick={this.handleClick} label="/" value="/" />
                    <Button onClick={this.handleClick} label="4" value="4" />
                    <Button onClick={this.handleClick} label="5" value="5" />
                    <Button onClick={this.handleClick} label="6" value="6" />
                    <Button onClick={this.handleClick} label="*" value="*" />
                    <Button onClick={this.handleClick} label="1" value="1" />
                    <Button onClick={this.handleClick} label="2" value="2" />
                    <Button onClick={this.handleClick} label="3" value="3" />
                    <Button onClick={this.handleClick} label="-" value="-" />
                    <Button onClick={this.handleClick} label="0" value="0" />
                    <Button onClick={this.handleClick} label="." value="." />
                    <Button onClick={this.handleClick} label="C" value="clear" />
                    <Button onClick={this.handleClick} label="=" value="equal" />
                </ButtonsBoard>
            </div>
        );
    }
}