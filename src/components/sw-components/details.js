import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withDataDetails }        from '../hoc-helpers'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()
const { 
    getPerson,
    getStarship,
    getPlanet,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
} = swapiService

const PersonDetails = withDataDetails(itemId, getPerson, getPersonImage)

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails 
                itemId={itemId}
                getData={ getStarship }
                getImageUrl={ getStarshipImage }    
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Lehgth" />
                <Record field="crew" label="Crew" />
            </ItemDetails>
    )
}

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails 
                itemId={itemId}
                getData={ getPlanet }
                getImageUrl={ getPlanetImage }    
            >
                <Record field="population" label="Populatioin" />
                <Record field="rotationPeriod" label="Rotation Period" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
    )
}

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
}