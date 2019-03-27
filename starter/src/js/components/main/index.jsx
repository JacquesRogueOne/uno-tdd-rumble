import React, { Component } from "react";

import PlayerList from "./components/player-list/index.jsx";
import AddPlayer from "./components/add-player/index.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  clickButton(value) {
    const {players} = this.state;
    this.setState({players: [...players, value]})
  }

  render() {
    return (
      <main>
        <AddPlayer clickButton={this.clickButton} />
        {/* <PlayerList /> */}
      </main>
    );
  }
}

export default Main;