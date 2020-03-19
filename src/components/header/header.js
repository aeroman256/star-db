import React from 'react'

import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="//" alt="home">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                <a href="//" alt="people">People</a>
                </li>
                <li>
                <a href="//" alt="planets">Planets</a>
                </li>
                <li>
                <a href="//" alt="starships">Starships</a>
                </li>
            </ul>
        </div>
    )
};

export default Header