import React, { Component } from 'react'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import Row from '../row'


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

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    
    

    render() {
        const { hasError } = this.state

        if (hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData={this.swapiService.getAllPeople}
                                renderItem={({name, gender, birthYear}) => `${name} - ${gender}, ${birthYear}`}/>
        )

        const itemDetails = (
            <ItemDetails itemId={ this.state.selectedItem }/>
        )

        return (
            <Row left={itemList} right={itemDetails}/>
        )
    }
}