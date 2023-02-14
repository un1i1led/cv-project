import React from 'react';

const Education = props => {

    const updateState = (field, value) => {
        const newState = props.state.education.map(obj => {
            if (obj.id === props.id) {
                return {...obj, [field]: value};
            }

            return obj;
        });

        props.updateState('education', newState);
    }

    const removeItem = () => {
        const filteredState = props.state.education.filter(
            obj => obj.id !== props.id
        );

        props.updateState('education', filteredState);
        props.removeEdu(props.id);
    }

    return(
        <div>
            <div className='edu-inputs'>
                <input type='text' id={props.id + 'c'} placeholder='Course'
                onInput={(e) => {updateState('course', e.target.value)}}></input>
                <input type='text' id={props.id + 'u'} placeholder='University'
                onInput={(e) => {updateState('university', e.target.value)}}></input>
                <input type='text' id={props.id + 's'} placeholder='Start Date'
                onInput={(e) => {updateState('start', e.target.value)}}></input>
                <input type='text' id={props.id + 'e'} placeholder='End Date'
                onInput={(e) => {updateState('end', e.target.value)}}></input>
            </div>
            <div>
                <button className='del-btn' onClick={removeItem}>Delete</button>
            </div>
        </div>
    )
}

export default Education;