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
  }

  addPlayer(value) {
    if (value) {
      const {players} = this.state;
      this.setState({players: [...players, value]}); 
    }
  }

  removePlayerAt(index) {
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
        {this.state.players.length > 0 && <PlayerList players={players}/>}
      </main>
    );
  }
}

export default Main;