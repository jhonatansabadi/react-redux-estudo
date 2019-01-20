import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSoma } from '../actions/main';
import { connect } from 'react-redux';
import { Button, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
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
                <div className="container">
                    <br />
                    <Row>
                        <Col md={6}>
                            <ControlLabel>Adicione um item</ControlLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormControl></FormControl>
                        </Col>
                        
                        <Col>
                            <Button className="btn btn-success mb-2">ADD</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        resultado: store.main.resultado
    };
})(Main);
