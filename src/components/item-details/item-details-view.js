import React from 'react'
import ErrorButton from '../error-button'

import './item-details.css';

const Record = ({ field, label}) => {
    return(
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ field }</span>
        </li>
    )
}

export { Record }

const ItemView = (props) => {
    console.log(props)
    const {
            name,
            gender,
            birthYear,
            eyeColor,
        } = props.item
    
    const { image } = props
    return (
        <React.Fragment>
                <img className="item-image"
                    src={ image } 
                    alt="person"
                />
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