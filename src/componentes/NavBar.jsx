import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar className="bg-primary">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home" className="text-light">{ this.props.title }</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default connect((store) => {
    return {
        resultado: store.main.resultado
    };
})(NavBar);
