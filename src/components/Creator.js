import React, { Component } from 'react';
import General from './General';

export default class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <h2>General Details</h2>
                <General/>
            </div>
        );
    }
}