import React from 'react';
import DisplayExp from './DisplayExp';
import { phoneIcon, locIcon, emailIcon } from '../img';

const Display = props => {

    return(
        <div className='display'>
            <div className='general-details'>
                <div className='gd-left-sd'>
                    <h2>{props.state.name} {props.state.lastName}</h2>
                    <h3>{props.state.title}</h3>
                </div>
                <div className='gd-right-sd'>
                    <div className='gd-img-div'>
                        <img className='gd-img' src={phoneIcon}/>
                        <p>{props.state.number}</p>
                    </div>
                    <div className='gd-img-div'>
                        <img className='gd-img' src={emailIcon}/>
                        <p>{props.state.email}</p>
                    </div>
                    <div className='gd-img-div'>
                        <img className='gd-img' src={locIcon}/>
                        <p>{props.state.location}</p>
                    </div>
                </div>
                <div className='separator'>
                    <div></div>
                </div>
            </div>
            <div className='gd-desc'>
                <p>{props.state.description}</p>
            </div>
            <div className='containers'>
                <DisplayExp state={props.state}/>
            </div>
        </div>
    );
};

export default Display;