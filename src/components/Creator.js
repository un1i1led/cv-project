import React, { Component } from 'react';
import General from './General';

export default class Creator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>General Details</h2>
                <General state={this.props.state} updateState={this.props.updateState}/>
            </div>
        );
    }
}