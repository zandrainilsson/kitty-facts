import React from 'react';
import { Link } from "react-router-dom";

export default () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/my-best-kitty-facts">My Best Kitty Facts</Link>
                </li>
            </ul>
        </nav>
    )
}