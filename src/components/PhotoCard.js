import React from "react";


function PhotoCard({name, url}){
    return(
        <div>
            <div className="photo-card">
                <img className="character-img" src={url} alt={name}/>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default PhotoCard