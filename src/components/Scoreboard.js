import React from "react";

function ScoreBoard({score, bestScore}){
    return(
        <div>
            <div>Current Score: {score} </div>
            <div>  Best Score: {bestScore}</div>
        </div>
    )
}

export default ScoreBoard