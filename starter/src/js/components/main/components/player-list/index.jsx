import React, {Component} from "react";

import style from "./style.css";

class PlayerList extends Component{

    render() {
        return(
            <div>
                <h2>LISTE DES JOUEURS</h2>
                <ul className={style.playerList}>
                    <li>alexandre</li>
                    <li>wissem</li>
                </ul>
            </div>
        ); 
    }
}

export default PlayerList;