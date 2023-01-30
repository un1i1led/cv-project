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
    }

    addEdu = () => {
        const id = uniqid();
        this.props.addEdu(eduItem(id));
        this.setState({eduId: this.state.eduId.concat(id)});
    }

    render() {
        return(
            <div className='edu-container'>
                <h2 className='edu-div'>Education</h2>
                {this.state.eduId.map(x => <Education key={x} id={x} 
                state={this.props.state} updateState={this.props.updateState}/>)}
                <button onClick={this.addEdu}>Add</button>
            </div>
        )
    }
}