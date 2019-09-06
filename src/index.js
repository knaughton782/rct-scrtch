import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class App extends React.Component {
    state = {
        counter: 0
    }

    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {
        return <div>

            <h1>{this.state.counter}</h1>
            <button onClick={this.decreaseCounter}>
                -
            </button>
            <button onClick={this.increaseCounter}>
                +
            </button>

        </div>
    }
}







ReactDOM.render(<App />, document.getElementById('root'));