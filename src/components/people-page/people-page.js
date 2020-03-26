import React, { Component } from 'react'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import SwapiService from '../../services/swapi-service'
import Row from '../row'
import ErrorBoundry from '../error-boundry'


export default class PeoplePage extends Component {
    swapiService = new SwapiService()
    state = {
        selectedItem: 3,
        hasError: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id 
        })
    }

    render() {
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople}
                >
                    {(item) => `${item.name} - ${item.gender}, ${item.birthYear}`}
                </ItemList>
        )

        const itemDetails = (
            <ItemDetails itemId={ this.state.selectedItem }/>
        )

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails}/>
            </ErrorBoundry>
        )
    }
}