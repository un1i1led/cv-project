import React, { Component } from 'react';

export default class Education extends Component {
    constructor(props) {
        super(props);
    }

    updateState = (field, value) => {
        const newState = this.props.state.education.map(obj => {
            if (obj.id === this.props.id) {
                return {...obj, [field]: value};
            }

            return obj;
        });

        this.props.updateState('education', newState);
    }

    removeItem = () => {
        const filteredState = this.props.state.education.filter(
            obj => obj.id !== this.props.id
        );

        this.props.updateState('education', filteredState);
        this.props.removeEdu(this.props.id);
    }

    render() {
        return(
            <div>
                <div className='edu-inputs'>
                    <input type='text' id={this.props.id + 'c'} placeholder='Course'
                    onInput={(e) => {this.updateState('course', e.target.value)}}></input>
                    <input type='text' id={this.props.id + 'u'} placeholder='University'
                    onInput={(e) => {this.updateState('university', e.target.value)}}></input>
                    <input type='text' id={this.props.id + 's'} placeholder='Start Date'
                    onInput={(e) => {this.updateState('start', e.target.value)}}></input>
                    <input type='text' id={this.props.id + 'e'} placeholder='End Date'
                    onInput={(e) => {this.updateState('end', e.target.value)}}></input>
                    <input type='text' id={this.props.id + 'd'} placeholder='Description'
                    onInput={(e) => {this.updateState('description', e.target.value)}}></input>
                </div>
                <div>
                    <button onClick={this.removeItem}>Delete</button>
                </div>
            </div>
        )
    }

}