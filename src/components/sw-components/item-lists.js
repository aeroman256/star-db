import React from 'react'
import ItemList from '../item-list'
import { withData } from '../hoc-helpers'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService() 

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService

const withChildWrapped = (Wrapped, fn) => {
    return (props) => {
        return(
        <Wrapped {...props}>
            {fn}
        </Wrapped>
        )
    }
}

const renderName = (item) => {return (<p>{item.name}</p>)}
const renderNameAdnModel = ({name, model}) => {return (<p>{name} -- {model}</p>)}


const ListWithChildren = withChildWrapped(
    ItemList,
    renderName)

const PersonList = withData(
                        withChildWrapped(ItemList, renderName),
                        getAllPeople)
const StarshipList = withData(
                        withChildWrapped(ItemList, renderNameAdnModel),
                        getAllStarships)
const PlanetList = withData(
                        withChildWrapped(ItemList, renderName),
                        getAllPlanets)


export {
    PersonList,
    StarshipList,
    PlanetList
}