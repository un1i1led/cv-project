import React, { Component } from 'react';

export default class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            title: '',
            number: '',
            email: '',
            location: '',
        }
    }

    changeState = (state, value) => {
        this.setState({[state]: value});
    }

    render() {
        return (
            <div>
                <div className='fname'>
                    <input type='text' id='fname' name='fname' onInput={() => {this.changeState('name', 
                    document.querySelector('#fname').value)}}></input>
                </div>
                <div className='lname'>
                    <input type='text' id='fname' name='fname'></input>
                </div>
                <div className='title'>
                    <input type='text' id='fname' name='fname'></input>
                </div>
                <div className='number'>
                    <input type='text' id='fname' name='fname'></input>
                </div>
                <div className='email'>
                    <input type='text' id='fname' name='fname'></input>
                </div>
                <div className='location'>
                    <input type='text' id='fname' name='fname'></input>
                </div>
            </div>
        );
    }
}