import React, { Component } from 'react';
import { getSoma } from '../actions/main';
import { connect } from 'react-redux';
import { Label } from 'react-bootstrap';

class Main extends Component {
    constructor(params) {
        super(params);
        this.state = {
            resultado: 0
        }

        this.props.dispatch(getSoma(1,7));
    }

    componentWillReceiveProps(props){
        this.setState(props)
    }
    
    render() {
        return (
            <div>
                <Label>{ this.state.resultado }</Label>
            </div>
        );
    }
}

export default connect((store) => {
    console.log(store)
    return {
        resultado: store.main.resultado
    };
})(Main);
