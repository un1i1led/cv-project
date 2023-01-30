import React, { Component } from 'react';
import EduContainer from './EduContainer';
import ExpContainer from './ExpContainer';
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
                <ExpContainer state={this.props.state} updateState={this.props.updateState}
                addExp={this.props.addExp}/>
                <EduContainer state={this.props.state} updateState={this.props.updateState}
                addEdu={this.props.addEdu}/>
            </div>
        );
    }
}