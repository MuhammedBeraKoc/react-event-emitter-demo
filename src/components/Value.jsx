import React, {Component} from 'react';
import './Value.sass'
import EventEmitter from 'react-event-dispatcher'

class Value extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        EventEmitter.emit('Value', this.increment, this.decrement, this.reset)
    }

    increment = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrement = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    reset = () => {
        this.setState({
            value: 0
        })
    }

    render() {
        return (
            <div className={'value'}>
                {this.state.value}
            </div>
        );
    }
}

export default Value;