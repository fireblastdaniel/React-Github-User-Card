import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userInfo: {}
    };
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/fireblastdaniel')
    .then( response => {
      this.setState({
        userInfo: response.data
      })
      console.log(this.state)
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
