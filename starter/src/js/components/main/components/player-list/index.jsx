import React, {Component} from "react";

class PlayerList extends Component{

    render() {
        return(
            <div>
                <h2>LISTE DES JOUEURS</h2>
                <ul className="playerList">
                    <li>alexandre</li>
                    <li>wissem</li>
                </ul>
            </div>
        ); 
    }
}

export default PlayerList;