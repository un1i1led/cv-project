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

    render() {
        return(
            <div>
                <div className='exp-inputs'>
                    <input type='text' id={this.props.id + '-p'} placeholder='Position'
                     onInput={(e) => {this.updateState('position', e.target.value)}}></input>
                    <input type='text' id={this.props.id + '-c'} placeholder='Company'></input>
                    <input type='text' id={this.props.id + '-ci'} placeholder='City'></input>
                    <input type='text' id={this.props.id + '-f'} placeholder='From'></input>
                    <input type='text' id={this.props.id + '-t'} placeholder='To'></input>
                    <input type='text' id={this.props.id + '-d'} placeholder='Description'></input>
                </div>
            </div>
        )
    }
}