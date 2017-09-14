import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  constructor(props){
    super(props);


  }
  // Fetch articles after first mount
  componentDidMount() {
  }


  ringBell = () => {

  fetch('/api/bell', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'name'
  })
  )}




  }

}
  



  render() {
    return (
      <div className="App">
          <div>
            <button
              className="more"
              onClick={this.ringBell}>
              Get More
            </button>
          </div>
    );
  }
}

export default App;
