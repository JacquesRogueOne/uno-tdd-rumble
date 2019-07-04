import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

class PlayerList extends Component {

  render() {
    const {players, removePlayerAt} = this.props;

    return(
      <div>
        <h2>LISTE DES JOUEURS</h2>
        <ul className="playerList">
          {players.map(
            (player, index) => 
              <li key={player}>
                <button type="button" onClick={() => removePlayerAt(index)}>
                  <FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>
                </button>
                <span>{player}</span>
              </li>)
          }
        </ul>
      </div>
    );
  }
}

export default PlayerList;