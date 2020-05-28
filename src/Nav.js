import React from 'react';
import { NavLink } from "react-router-dom";

/**
 * Funktion som returerar meny'n och dess alternativ.
 */
export default () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="selectedNav">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/my-best-kitty-facts" activeClassName="selectedNav">My Best Kitty Facts</NavLink>
                </li>
            </ul>
        </nav>
    )
}