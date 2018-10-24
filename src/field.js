import React, { Component } from 'react';
import { connect } from 'react-redux';

class Field extends Component {
   render(){
        return (
            <div>
                &nbsp;<label>{this.props.value}</label> <br /><br />
                <input onChange={this.handleChange} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        value: state.field.value
    }
}

export default connect(mapStateToProps)(Field);
