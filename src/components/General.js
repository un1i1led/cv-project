import React, { Component } from 'react';

export default class General extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='fname'>
                    <input type='text' id='f-name' placeholder='Name' onInput={() => {this.props.updateState('name', 
                    document.querySelector('#f-name').value)}}></input>
                </div>
                <div className='lname'>
                    <input type='text' id='l-name' placeholder='Last Name'></input>
                </div>
                <div className='title'>
                    <input type='text' id='job-title' placeholder='Job Title'></input>
                </div>
                <div className='number'>
                    <input type='text' id='p-num' placeholder='Phone Number'></input>
                </div>
                <div className='email'>
                    <input type='text' id='email' placeholder='Email'></input>
                </div>
                <div className='location'>
                    <input type='text' id='location' placeholder='Location'></input>
                </div>
            </div>
        );
    }
}