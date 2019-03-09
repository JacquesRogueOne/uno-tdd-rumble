import React, { Component } from "react";

import PlayerList from "./components/player-list/index.jsx";
import AddPlayer from "./components/add-player/index.jsx";

const Main = () => {

  return (
    <main>
      <AddPlayer />
      <PlayerList />
    </main>
  );
}

export default Main;