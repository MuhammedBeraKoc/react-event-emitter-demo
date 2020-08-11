import React, {Component} from 'react'
import './Counter.sass'
import Value from './Value'
import ButtonSet from './ButtonSet'

class Counter extends Component {
    render() {
        return (
            <div className={'counter'}>
                <Value />
                <ButtonSet />
            </div>
        )
    }
}

export default Counter