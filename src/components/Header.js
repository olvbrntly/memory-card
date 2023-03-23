import React from "react";
import Modes from './Modes';
import ScoreBoard from "./Scoreboard";
import './components.css'

function Header({score, bestScore }){
    return(
        <div className="header">
            <div className="header-left">
            <h1> DUNDER MIFFLIN MEMORY GAME</h1> {/* this will be in the dundermifflin font */}
            <ScoreBoard score={score} bestScore={bestScore}/>
            </div>
            <Modes/>
        </div>
    )
 
}

export default Header