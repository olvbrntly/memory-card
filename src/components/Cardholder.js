import React from "react";
import PhotoCard from "./PhotoCard";

function CardHolder({characters}){
    return(
    <div>
        <div className="container">
            {characters.map(c => (
                <div key={c.id}>
                     <PhotoCard name={c.name} url={c.imgURL}/>
                </div>
               
            ))}
        </div>
    </div>
    )
}

export default CardHolder