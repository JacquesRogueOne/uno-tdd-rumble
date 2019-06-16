import React, {Component} from 'react';

import style from './style.css';

class PlayerList extends Component {

  render() {
    const {players, removePlayerAt} = this.props;

    return(
      <div>
        <h2>LISTE DES JOUEURS</h2>
        <ul className={style.playerList}>
          {players.map(
            (player, index) => 
              <li key={player}>
                <button type="button" onClick={removePlayerAt(index)}>-</button>
                <span>{player}</span>
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default PlayerList;