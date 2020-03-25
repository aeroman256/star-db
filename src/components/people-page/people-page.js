import React, { Component } from 'react'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import SwapiService from '../../services/swapi-service'
import Row from '../row'
import ErrorBoundry from '../error-boundry'


export default class PeoplePage extends Component {
    swapiService = new SwapiService()
    state = {
        selectedPerson: 2,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id 
        })
    }

    render() {
        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {({name, gender, birthYear}) => `${name} - ${gender}, ${birthYear}`}
            </ItemList>
        )

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails personId={ this.state.selectedPerson }/>
            </ErrorBoundry>
        )

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        )
    }
}