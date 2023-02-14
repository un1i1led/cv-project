import React from 'react';

const Experience = props => {

    const updateState = (field, value) => {
        const newState = props.state.experience.map(obj => {
            if (obj.id === props.id) {
                return {...obj, [field]: value};
            }

            return obj;
        });

        props.updateState('experience', newState);
    }

    const removeItem = () => {
        const filteredState = props.state.experience.filter(
            obj => obj.id !== props.id
        );

        props.updateState('experience', filteredState);
        props.removeExp(props.id);
    }

    return(
        <div>
            <div className='exp-inputs'>
                <input type='text' id={props.id + '-p'} placeholder='Position' 
                onInput={(e) => {updateState('position', e.target.value)}}></input>
                <input type='text' id={props.id + '-c'} placeholder='Company' 
                onInput={(e) => {updateState('company', e.target.value)}}></input>
                <input type='text' id={props.id + '-f'} placeholder='From' 
                onInput={(e) => {updateState('from', e.target.value)}}></input>
                <input type='text' id={props.id + '-t'} placeholder='To' 
                onInput={(e) => {updateState('to', e.target.value)}}></input>
                <input type='text' id={props.id + '-d'} placeholder='Description'
                onInput={(e) => {updateState('description', e.target.value)}}></input>
            </div>
            <div>
                <button className='del-btn' onClick={removeItem}>Delete</button>
            </div>
        </div>
    );
};

export default Experience;