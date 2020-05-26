import React from 'react';
import cat from "./cat.png";

/**
 * Funktion som returnerar html-elementet <header>
 */
export default () => {
    return(
        <header>
            <img className="img-logo" src={cat} alt="kitty cat"/>
            <h1>Kitty Facts</h1>
            <img id="right" className="img-logo" src={cat} alt="kitty cat"/>
        </header>
    )
}