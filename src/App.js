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
        location: 'San Diego, US',
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState = (state, value) => this.setState({[state]: value});

  render() {
    return(
      <div>
        <Creator state={this.state} updateState={this.updateState}/>
        <Display state={this.state}/>
      </div>
    )
  }
}

export default App;
