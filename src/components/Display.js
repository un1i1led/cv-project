import React, { Component } from 'react';
import DisplayExp from './DisplayExp';

export default class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='display'>
                <div className='general-details'>
                    <h2>General Details</h2>
                    <p>{this.props.state.name + ' ' + this.props.state.lastName}</p>
                    <p>{this.props.state.title}</p>
                    <p>{this.props.state.number}</p>
                    <p>{this.props.state.email}</p>
                    <p>{this.props.state.location}</p>
                    <p>{this.props.state.description}</p>
                </div>
                <div className='containers'>
                    <DisplayExp state={this.props.state}/>
                </div>
            </div>
        )
    }
}