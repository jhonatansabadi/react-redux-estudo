import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSoma } from '../actions/main';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import NavBar from './../componentes/NavBar';

class Main extends Component {
    constructor(params) {
        super(params);
        this.state = {
            resultado: 0
        }

        this.props.dispatch(getSoma(1, 7));
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        return (
            <div className="content-fluid">
                <NavBar title="Todo App"></NavBar>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        resultado: store.main.resultado
    };
})(Main);
