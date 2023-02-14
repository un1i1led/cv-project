import React, { useState } from 'react';
import Experience from './Experience';
import { expItem } from './expItem';
import uniqid from 'uniqid';

const ExpContainer = props => {
    const [expId, setExpId] = useState([]);

    const addExpId = () => {
        const id = uniqid();
        const newArr = props.state.experience.concat(expItem(id));
        props.updateState('experience', newArr);
        setExpId(expId.concat(id));
    }

    const removeExp = (id) => {
        const filteredState = expId.filter(exp => exp !== id);

        setExpId(filteredState);
    }

    return (
        <div className='exp-container'>
            <h2 className='exp-div'>Experience</h2>
            {expId.map(x => <Experience key={x} id={x}
            state={props.state} updateState={props.updateState}
            removeExp={removeExp}/>)}
            <button onClick={addExpId}>Add</button>
        </div>
    );
};

export default ExpContainer;