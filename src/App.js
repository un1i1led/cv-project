import React from 'react';
import Creator from './components/Creator';
import Display from './components/Display';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: 'John',
        lastName: 'Smith',
        title: 'Software Engineer',
        number: '202-555-0162',
        email: 'myemail@email.com',
        location: 'City, State',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, arcu in sodales pellentesque, justo enim facilisis elit, nec sodales urna felis vitae mauris.',
        experience: [],
        education: [],
    }

    this.updateState = this.updateState.bind(this);
    this.addExp = this.addExp.bind(this);
    this.addEdu = this.addEdu.bind(this);
  }

  updateState = (state, value) => this.setState({[state]: value});

  addExp = (expItem) => {
    this.setState({
      experience: [...this.state.experience, expItem]
    });
  }

  addEdu = (eduItem) => {
    this.setState({
      education: [...this.state.education, eduItem]
    });
  }

  render() {
    return(
      <div className='main'>
        <Creator state={this.state} updateState={this.updateState} 
        addExp={this.addExp} addEdu={this.addEdu}/>
        <Display state={this.state}/>
      </div>
    )
  }
}

export default App;
