import React, { Component } from 'react';

import PlayerList from './components/player-list/index.jsx';
import AddPlayer from './components/add-player/index.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayerAt = this.removePlayerAt.bind(this);
  }

  addPlayer(value) {
    console.log('coucou');
    if (value) {
      const {players} = this.state;
      this.setState({players: [...players, value]}); 
    }
  }

  removePlayerAt(index) {
    console.log('bye bye');
    const {players} = this.state;
    const tmpPlayers =  players.slice();
    tmpPlayers.splice(index, 1);
    this.setState({players: tmpPlayers});
  }

  render() {
    const {players} = this.state; 
    return (
      <main>
        <AddPlayer clickButton={this.addPlayer} />
        {this.state.players.length > 0 && <PlayerList players={players} removePlayerAt={this.removePlayerAt}/>}
      </main>
    );
  }
}

export default Main;