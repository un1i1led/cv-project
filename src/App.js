import React from 'react';
import Creator from './components/Creator';
import Display from './components/Display';
import uniqid from 'uniqid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        lastName: '',
        title: 'Software Engineer',
        number: '',
        email: '',
        location: 'Culiacan, Sin.',
        description: '',
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
      <div>
        <Creator state={this.state} updateState={this.updateState} 
        addExp={this.addExp} addEdu={this.addEdu}/>
        <Display state={this.state}/>
      </div>
    )
  }
}

export default App;
