import React, { Component } from 'react';

export default class DisplayExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>Experience</h3>
                {this.props.state.experience.map(x => <div key={x.id}>
                    <p>{x.position}</p>
                </div>)}
                <h3>Education</h3>
                {this.props.state.education.map(x => <div key={x.id}>
                    <p>{x.course}</p>
                </div>)}
            </div>
        )
    }
}