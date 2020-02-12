import React from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import Bio from './components/Bio'
import Followers from './components/Followers'
import Following from './components/Following'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: 'fireblastdaniel',
      userInfo: {},
      userFollowers: [],
      userFollowing: []
    };
  }

  componentDidMount() {
    axios
    .all([
      axios.get(`https://api.github.com/users/${this.state.user}`),
      axios.get(`https://api.github.com/users/${this.state.user}/followers`),
      axios.get(`https://api.github.com/users/${this.state.user}/following`)
    ])
    .then( response => {
      this.setState({
        userInfo: response[0].data,
        userFollowers: response[1].data,
        userFollowing: response[2].data
      })
      console.log(this.state)
    })
    .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.user !== this.state.user){
      axios
      .all([
        axios.get(`https://api.github.com/users/${this.state.user}`),
        axios.get(`https://api.github.com/users/${this.state.user}/followers`),
        axios.get(`https://api.github.com/users/${this.state.user}/following`)
      ])
      .then( response => {
        this.setState({
          userInfo: response[0].data,
          userFollowers: response[1].data,
          userFollowing: response[2].data
        })
        console.log(this.state)
      })
      .catch(error => console.log(error))
    }
  }

  clickFollowCard = username => {
    console.log(username)
    this.setState({
      user: username
    })
  }

  render() {
    return (
        <div className="App">
          <Switch>
            <Route 
              exact path='/' 
              render={ () => 
                <Bio 
                  user={this.state.userInfo}
                />}
            />
            {console.log(this.state)}
            <Route 
              path='/followers' 
              render={ () => <Followers clickFollowCard={this.clickFollowCard} user={this.state.userInfo} followers={this.state.userFollowers} />} 
            />
            <Route path='/following' component={Following} />
          </Switch>
        </div>
    );
  }
}

export default App;
