import React, { Component } from 'react';

export default class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>{this.props.state.name}</p>
                <p>{this.props.state.lastName}</p>
                <p>{this.props.state.title}</p>
                <p>{this.props.state.number}</p>
                <p>{this.props.state.email}</p>
                <p>{this.props.state.location}</p>
            </div>
        )
    }
}