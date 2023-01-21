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
                    <input type='text' id='l-name' placeholder='Last Name' onInput={() => {this.props.updateState('lastName', 
                    document.querySelector('#l-name').value)}}></input>
                </div>
                <div className='title'>
                    <input type='text' id='job-title' placeholder='Job Title' onInput={() => {this.props.updateState('title', 
                    document.querySelector('#job-title').value)}}></input>
                </div>
                <div className='number'>
                    <input type='text' id='p-num' placeholder='Phone Number' onInput={() => {this.props.updateState('number', 
                    document.querySelector('#p-num').value)}}></input>
                </div>
                <div className='email'>
                    <input type='text' id='email' placeholder='Email' onInput={() => {this.props.updateState('email', 
                    document.querySelector('#email').value)}}></input>
                </div>
                <div className='location'>
                    <input type='text' id='location' placeholder='Location' onInput={() => {this.props.updateState('location', 
                    document.querySelector('#location').value)}}></input>
                </div>
                <div className='description'>
                    <textarea id='desc-area' cols='30' rows='10' placeholder='Something about you..' onInput={() => {
                        this.props.updateState('description', document.querySelector('#desc-area').value)
                    }}></textarea>
                </div>
            </div>
        );
    }
}