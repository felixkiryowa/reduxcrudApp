import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

class Counting extends React.Component {

    
    handleDecrement () {
        this.props.increment();
    }


    handleIncrement () {

        this.props.decrement();
    }
    render() {
        return (
            

            <div>
                <h4>{this.props.counter}</h4>
                <button onClick = {this.handleIncrement.bind(this)}>Increment</button>
                <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps  = state => {
    return {
        counter:state.counter
    }
}

export default  connect(mapStateToProps, {increment, decrement})(Counting);