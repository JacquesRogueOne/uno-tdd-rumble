import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./style.css";

const AddPlayerButton = ({clickButton}) => {

  return (
      <button onClick={clickButton} className={style.addPlayerButton}>+</button>
  );
}

AddPlayer.propTypes = {
  clickButton: PropTypes.func.isRequired,
}

export default AddPlayerButton;