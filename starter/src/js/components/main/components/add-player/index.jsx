import React, { Component } from "react";

import AddPlayerField from "./components/add-player-field/index.jsx";
import AddPlayerButton from "./components/add-player-button/index.jsx";

const AddPlayer = () => {

  return (
    <div className="addPlayer">
        <AddPlayerField />
        <AddPlayerButton />
    </div>
  );
}

export default AddPlayer;