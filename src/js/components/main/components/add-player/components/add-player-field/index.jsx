import React, { Component } from "react";

const AddPlayerField = ({playerName, onChangePlayerName}) => {

  return (
    <div className="addPlayerField">
        <label id="addPlayerLabel" htmlFor="addPlayerInput">Ajouter un joueur</label>
        <input id="addPlayerInput" type="text" value={playerName} onChange={onChangePlayerName} />
    </div>
  );
}

export default AddPlayerField;