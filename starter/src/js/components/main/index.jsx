import React, { Component } from "react";

import AddPlayerField from "./components/add-player-field/index.jsx";
import AddPlayerButton from "./components/add-player-button/index.jsx";

const Main = () => {

  return (
    <main>
      <div className="addPlayer">
        <AddPlayerField />
        <AddPlayerButton />
      </div>
    </main>
  );
}

export default Main;