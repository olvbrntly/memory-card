import React from "react";
import Modes from './Modes';
import './Header.css'

function Header(){
    return(
        <div className="header">
            <h1> DUNDER MIFFLIN MEMORY GAME</h1> {/* this will be in the dundermifflin font */}
            <Modes/>
        </div>
    )
 
}

export default Header