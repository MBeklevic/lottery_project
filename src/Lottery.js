import React, { Component } from 'react';
import "./Lottery.css";
import Ball from "./Ball";


class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 40,
    }
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array.from({ length: this.props.numBalls }),
            // numbers: [1, 2, 3, 4, 5, 6]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        let nums = [];
        for (let i = 0; i < this.props.numBalls; i++) {
            let n = Math.floor(Math.random() * this.props.maxNum + 1);
            nums.push(n);
        }
        this.setState({ numbers: nums })
    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                <div>{this.state.numbers.map(num => <Ball num={num} />)}</div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery;