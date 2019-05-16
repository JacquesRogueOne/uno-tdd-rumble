import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./style.css";

import AddPlayerField from "./components/add-player-field/index.jsx";
import AddPlayerButton from "./components/add-player-button/index.jsx";


class AddPlayer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ""
    };

    this.registerPlayer = this.registerPlayer.bind(this)
    this.onChangePlayerName = this.onChangePlayerName.bind(this)

  }

  onChangePlayerName(event) {
    this.setState({name: event.target.value});
  }

  registerPlayer() {
    this.props.clickButton(this.state.name);
    this.setState({name: ''});
  }

  render() {
    return (
      <div className={style.addPlayer}>
          <AddPlayerField playerName={this.state.name} onChangePlayerName={this.onChangePlayerName} />
          <AddPlayerButton clickButton={this.registerPlayer} />
      </div>
    );
  }

}

AddPlayer.propTypes = {
  clickButton: PropTypes.func.isRequired,
}

export default AddPlayer;