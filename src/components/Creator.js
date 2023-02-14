import React from 'react';
import EduContainer from './EduContainer';
import ExpContainer from './ExpContainer';
import General from './General';

const Creator = props => {

    return(
        <div className='creator'>
            <h2>Personal Details</h2>
            <General state={props.state} updateState={props.updateState}/>
            <ExpContainer state={props.state} updateState={props.updateState}/>
            <EduContainer state={props.state} updateState={props.updateState}/>
        </div>
    );
};


export default Creator;