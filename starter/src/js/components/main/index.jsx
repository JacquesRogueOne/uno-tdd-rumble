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

  render() {
    return (
      <main>
        <AddPlayer />
        {/* <PlayerList /> */}
      </main>
    );
  }
}

export default Main;