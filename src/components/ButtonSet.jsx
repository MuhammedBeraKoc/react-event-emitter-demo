import React, {Component} from 'react'
import './ButtonSet.sass'
import EventEmitter from "react-event-dispatcher";

class ButtonSet extends Component {
    emptyFunction = () => {}

    constructor(props) {
        super(props)
        this.state = {
            increment: this.emptyFunction,
            decrement: this.emptyFunction,
            reset: this.emptyFunction
        }
    }

    componentDidMount() {
        const key = 'Value'
        this.setState({
            increment: EventEmitter.getOne(key, 0),
            decrement: EventEmitter.getOne(key, 1),
            reset: EventEmitter.getOne(key, 2)
        })
    }

    render() {
        return (
            <div className={'buttonSet'}>
                <div className={'button'} onClick={this.state.increment}>Increment</div>
                <div className={'button'} onClick={this.state.decrement}>Decrement</div>
                <div className={'button'} onClick={this.state.reset}>Reset</div>
            </div>
        )
    }
}

export default ButtonSet