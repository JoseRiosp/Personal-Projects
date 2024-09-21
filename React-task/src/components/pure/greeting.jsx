import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

    constructor(props){
        super(props);
        this.state={ //Los estados son inmutados
            age : 25
        }
    }
    render() {
        return (
            <div>
                <h1>Hola { this.props.name}!</h1>
                <h2>Mi edad es {this.state.age}</h2>
                <div>
                    <button onClick={this.birthday}>+1 years</button> 
                </div>
            </div>
        );
    }

    birthday = ()=> {
        this.setState((prevState)=>({
            age : prevState.age +1
        }))
    }
}

Greeting.propTypes = {
    name: PropTypes.string
};

export default Greeting;