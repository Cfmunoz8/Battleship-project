import React from "react";
import Navbar from "../components/Navbar";
import BoardContainer from "../components/BoardContainer";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";
import Boats from "../components/Boats";

function Game () {
    return (
        <div>
            <Navbar/>
            <h1>Hello Game</h1>
            <BoardContainer/>
            <GameInfo/>
            <Boats/>

        </div>
    )
}

export default Game;