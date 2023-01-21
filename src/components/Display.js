import React, { Component } from 'react';

export default class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>{this.props.state.name}</p>
            </div>
        )
    }
}