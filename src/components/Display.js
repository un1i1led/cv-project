import React, { Component } from 'react';
import DisplayExp from './DisplayExp';
import { phoneIcon, locIcon, emailIcon } from '../img';

export default class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='display'>
                <div className='general-details'>
                    <div className='gd-left-sd'>
                        <h2>{this.props.state.name} {this.props.state.lastName}</h2>
                        <h3>{this.props.state.title}</h3>
                    </div>
                    <div className='gd-right-sd'>
                        <div className='gd-img-div'>
                            <img className='gd-img' src={phoneIcon}/>
                            <p>{this.props.state.number}</p>
                        </div>
                        <div className='gd-img-div'>
                            <img className='gd-img' src={emailIcon}/>
                            <p>{this.props.state.email}</p>
                        </div>
                        <div className='gd-img-div'>
                            <img className='gd-img' src={locIcon}/>
                            <p>{this.props.state.location}</p>
                        </div>
                    </div>
                </div>
                <div className='containers'>
                    <DisplayExp state={this.props.state}/>
                </div>
            </div>
        )
    }
}