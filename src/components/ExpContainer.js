import React, { Component } from 'react';
import Experience from './Experience';
import { expItem } from './expItem';
import uniqid from 'uniqid';

export default class ExpContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expId: [],
        }

        this.addExp = this.addExp.bind(this);
        this.removeExp = this.removeExp.bind(this);
    }

    addExp = () => {
        const id = uniqid();
        this.props.addExp(expItem(id));
        this.setState({expId: this.state.expId.concat(id)});
    }

    removeExp = (id) => {
        const filteredState = this.state.expId.filter(
            exp => exp !== id
        );

        this.setState({'expId': filteredState});
    }

    render() {
        return(
            <div className='exp-container'>
                <h2 className='exp-div'>Experience</h2>
                {this.state.expId.map(x => <Experience key={x} id={x} 
                state={this.props.state} updateState={this.props.updateState}
                removeExp={this.removeExp}/>)}
                <button onClick={this.addExp}>Add</button>
            </div>
        );
    }
}