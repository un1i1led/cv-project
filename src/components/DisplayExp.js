import React, { Component } from 'react';

export default class DisplayExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Experience</h2>
                {this.props.state.experience.map(x => <div key={x.id}>
                    <p>{x.position}</p>
                </div>)}
                <h2>Education</h2>
                {this.props.state.education.map(x => <div key={x.id}>
                    <p>{x.course}</p>
                </div>)}
            </div>
        )
    }
}