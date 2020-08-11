import React, {Component} from 'react';
import './App.sass'
import Counter from './components/Counter'

class App extends Component {
    render() {
        return (
            <div id={'App'}>
                <Counter />
            </div>
        );
    }
}

export default App;