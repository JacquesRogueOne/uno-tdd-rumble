import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./style.css";

const AddPlayerButton = ({clickButton}) => {

  return (
      <button type='button' onClick={clickButton} className={style.addPlayerButton}>+</button>
  );
}

AddPlayerButton.propTypes = {
  clickButton: PropTypes.func.isRequired,
}

export default AddPlayerButton;