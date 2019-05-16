import React, { Component } from 'react';

import PlayerList from './components/player-list/index.jsx';
import AddPlayer from './components/add-player/index.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };

    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(value) {
    if (value) {
      const {players} = this.state;
      this.setState({players: [...players, value]}); 
    }
  }

  render() {
    const {players} = this.state; 
    return (
      <main>
        <AddPlayer clickButton={this.clickButton} />
        {this.state.players.length > 0 && <PlayerList players={players}/>}
      </main>
    );
  }
}

export default Main;