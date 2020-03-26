import React from 'react'
import ErrorButton from '../error-button'

import './item-details.css';

const ItemView = ({ item }) => {
    const {
            id,
            name,
            gender,
            birthYear,
            eyeColor
        } = item
    return (
        <React.Fragment>
                <img className="item-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
                    alt="person"/>
                <div className="card-body">
            <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{ birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{ eyeColor }</span>
                    </li>
                </ul>
                <ErrorButton />
                </div>
        </React.Fragment>
    )
}

export default ItemView