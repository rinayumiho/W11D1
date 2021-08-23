import React from "react";
import * as Minesweeper from "../minesweeper";

export default class Tile extends React.Component {
    
    render() {

        
        return (
            <Board board={this.state.board} updateGame={this.updateGame}/>

            
        )
    }
}