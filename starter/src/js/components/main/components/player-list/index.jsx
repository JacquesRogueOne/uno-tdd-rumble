import React, {Component} from "react";

import style from "./style.css";

class PlayerList extends Component {

    render() {
        const {players,propsTest} = this.props
        
        return(
            <div>
                <h2>LISTE DES JOUEURS</h2>
                <ul className={style.playerList}>
                    <li>{players[0]}</li>
                    <li>{propsTest}</li>
                </ul>
            </div>
        ); 
    }
}

export default PlayerList;