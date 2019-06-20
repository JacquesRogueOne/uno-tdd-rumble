import React, { Component } from "react";
import PropTypes from "prop-types";

const AddPlayerButton = ({clickButton}) => {

  return (
      <button type='button' onClick={clickButton} className="addPlayerButton">+</button>
  );
}

AddPlayerButton.propTypes = {
  clickButton: PropTypes.func.isRequired,
}

export default AddPlayerButton;