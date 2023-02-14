import React, { useState } from 'react';
import Education from './Education';
import { eduItem } from './eduItem';
import uniqid from 'uniqid';

const EduContainer = props => {

    const [eduId, setEduId] = useState([]);

    const addEdu = () => {
        const id = uniqid();
        const newArr = props.state.education.concat(eduItem(id));
        props.updateState('education', newArr);
        setEduId(eduId.concat(id));
    }

    const removeEdu = (id) => {
        const filteredState = eduId.filter(
            edu => edu !== id
        );

        setEduId(filteredState);
    }

    return(
        <div className='edu-container'>
            <h2 className='edu-div'>Education</h2>
            {eduId.map(x => <Education key={x} id={x} 
            state={props.state} updateState={props.updateState}
            removeEdu={removeEdu}/>)}
            <button onClick={addEdu}>Add</button>
        </div>
    );
};

export default EduContainer;