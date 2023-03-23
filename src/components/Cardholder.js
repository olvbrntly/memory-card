import React from "react";
import PhotoCard from "./PhotoCard";

function CardHolder({characters, getCharacter}){
    return(
    <div>
        <div className="container">
            {characters.map(c => (
                <div key={c.id} onClick={() => {getCharacter(c.name)}}>
                    <PhotoCard name={c.name} url={c.imgURL}/>   
                </div>
            ))}
        </div>
    </div>
    )
}

export default CardHolder