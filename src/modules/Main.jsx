import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSoma, addItem } from '../actions/main';
import { connect } from 'react-redux';
import { Button, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
import NavBar from './../componentes/NavBar';
import Table from 'react-bootstrap-table-next';

class Main extends Component {
    constructor(params) {
        super(params);
        this.state = {
            item: {
                title: '',
                info: '',
             },
            title: [
                {
                    dataField: 'title',
                    text: 'Item'
                },
                {
                    dataField: 'info',
                    text: 'Informações'
                }
            ],
            itens: []
        }
        this.onAdd = this.onAdd.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
        const itens = this.state.itens;
        const item = { title: this.state.item.title };
        itens.push(item);
        this.setState({ itens: itens, item: '' })
    }

    onAdd(){
        const item = {
            item: this.state.item,
            info: new Date()
        }
        this.props.dispatch(addItem(item));
    }

    onChange(e){
        this.setState({ item: e.target.value });
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
                            <FormControl
                                value={this.state.item.title}
                                onChange={this.onChange}
                                onKeyPress={ (e) => {
                                    if(e.key == 'Enter'){
                                        this.onAdd(); 
                                    }
                                }} />
                        </Col>
                        
                        <Col>
                            <Button className="btn btn-success mb-2" onClick={this.onAdd}>
                                    <i className="fas fa-plus" />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Table
                                keyField="id"
                                columns={ this.state.title }
                                data={ this.state.itens }
                            />
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        item: store.main.item
    };
})(Main);
