import React, { Component } from "react";
import style from './style.css';

const AddPlayerField = ({playerName, onChangePlayerName}) => {

  return (
    <div className={style.addPlayerField}>
        <label id="" htmlFor="addPlayerInput">Ajouter un joueur</label>
        <input id="addPlayerInput" type="text" value={playerName} onChange={onChangePlayerName} />
    </div>
  );
}

export default AddPlayerField;