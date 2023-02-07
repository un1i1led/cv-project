import React, { Component } from 'react';

export default class Experience extends Component {
    constructor(props) {
        super(props);

    }

    updateState = (field, value) => {
        const newState = this.props.state.experience.map(obj => {
            if (obj.id === this.props.id) {
                return {...obj, [field]: value};
            }

            return obj;
        });

        this.props.updateState('experience', newState);
    }

    removeItem = () => {
        const filteredState = this.props.state.experience.filter(
            obj => obj.id !== this.props.id
        );

        this.props.updateState('experience', filteredState);
        this.props.removeExp(this.props.id);
    }

    render() {
        return(
            <div>
                <div className='exp-inputs'>
                    <input type='text' id={this.props.id + '-p'} placeholder='Position' 
                    onInput={(e) => {this.updateState('position', e.target.value)}}></input>
                    <input type='text' id={this.props.id + '-c'} placeholder='Company' 
                    onInput={(e) => {this.updateState('company', e.target.value)}}></input>
                    <input type='text' id={this.props.id + '-f'} placeholder='From' 
                    onInput={(e) => {this.updateState('from', e.target.value)}}></input>
                    <input type='text' id={this.props.id + '-t'} placeholder='To' 
                    onInput={(e) => {this.updateState('to', e.target.value)}}></input>
                    <input type='text' id={this.props.id + '-d'} placeholder='Description'
                    onInput={(e) => {this.updateState('description', e.target.value)}}></input>
                </div>
                <div>
                    <button className='del-btn' onClick={this.removeItem}>Delete</button>
                </div>
            </div>
        )
    }
}