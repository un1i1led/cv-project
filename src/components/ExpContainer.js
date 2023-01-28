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
    }

    addExp = () => {
        const id = uniqid();
        this.props.addExp(expItem(id));
        this.setState({expId: this.state.expId.concat(id)});
    }

    render() {
        return(
            <div className='exp-container'>
                <h2 className='exp-div'>Experience</h2>
                {this.state.expId.map(x => <Experience key={uniqid()} id={x}/>)}
                <button onClick={this.addExp}>Add</button>
            </div>
        );
    }
}