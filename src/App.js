import {React, useState} from 'react';
import Creator from './components/Creator';
import Display from './components/Display';
import './style.css';

const App = () => {

  const [state, setState] = useState({
    name: 'John',
    lastName: 'Smith',
    title: 'Software Engineer',
    number: '202-555-0162',
    email: 'myemail@gmail.com',
    location: 'City, State',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, arcu in sodales pellentesque, justo enim facilisis elit, nec sodales urna felis vitae mauris.',
    experience: [],
    education: []
  });
  
  const updateState = (state, value) => {
    setState(prevState => ({...prevState, [state]: value}));
  }

  return (
    <div className='main'>
      <Creator state={state} updateState={updateState}/>
      <Display state={state}/>
    </div>
  )
}

export default App;
