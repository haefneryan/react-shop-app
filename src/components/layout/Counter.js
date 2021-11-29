import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
    }
}
