import React, {Component} from 'react';

import style from './style.css';

class PlayerList extends Component {

  render() {
    const {players} = this.props;

    return(
      <div>
        <h2>LISTE DES JOUEURS</h2>
        <ul className={style.playerList}>
          {players.map(player => <li key={player}>{player}</li>)}
        </ul>
      </div>
    );
  }
}

export default PlayerList;