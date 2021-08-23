import React from "react"

export default class Game extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            board: new Board()
        }
        this.updateGame = this.updateGame.bind(this)
    }
    
    updateGame(tile) {

    }

    render() {
        let board = this.state.board;

        board.forEach(row => {
            row.forEach(tile => {
                this.updateGame(tile)
            })
        });
    }
}
