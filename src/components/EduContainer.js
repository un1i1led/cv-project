import React, { Component } from 'react';
import Education from './Education';
import { eduItem } from './eduItem';
import uniqid from 'uniqid';

export default class EduContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eduId: [],
        }

        this.addEdu = this.addEdu.bind(this);
        this.removeEdu = this.removeEdu.bind(this);
    }

    addEdu = () => {
        const id = uniqid();
        this.props.addEdu(eduItem(id));
        this.setState({eduId: this.state.eduId.concat(id)});
    }

    removeEdu = (id) => {
        const filteredState = this.state.eduId.filter(
            edu => edu !== id
        );

        this.setState({'eduId': filteredState});
    }

    render() {
        return(
            <div className='edu-container'>
                <h2 className='edu-div'>Education</h2>
                {this.state.eduId.map(x => <Education key={x} id={x} 
                state={this.props.state} updateState={this.props.updateState}
                removeEdu={this.removeEdu}/>)}
                <button onClick={this.addEdu}>Add</button>
            </div>
        )
    }
}