import React, { Component } from 'react';

export default class DisplayExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3 className='container-h3'>Experience</h3>
                {this.props.state.experience.map(x => <div key={x.id}>
                    <div className='exp-top'>
                        <div>
                            <p id='position-p'>{x.position}</p>
                        </div>
                        <div className='exp-right'>
                            <p className='gray-p'>{x.company} | </p>
                            <p className='exp-from-to'>&nbsp;{x.from} - {x.to}</p>
                        </div>
                    </div>
                    <div className='exp-bot'>
                        <p>{x.description}</p>
                    </div>
                </div>)}
                <h3 className='container-h3'>Education</h3>
                {this.props.state.education.map(x => <div key={x.id} className='edu-div'>
                    <div>
                        <p id='course-p'>{x.course}</p>
                    </div>
                    <div className='edu-right-sd'>
                        <p className='gray-p'>{x.university} | </p>
                        <p id='edu-dates'>&nbsp;{x.start} - {x.end}</p>
                    </div>
                </div>)}
            </div>
        )
    }
}