import React, { Component } from 'react';

import Header from '../header'
//import PeoplePage from '../people-page'
//import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
//import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'
//import ErrorButton from '../error-button'
import SwapiService from '../../services/swapi-service'
import Row from '../row'

import './app.css'
import ItemDetails from '../item-details';


export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        showRandomPlanet: true,
        hasError: false,
        selectedPerson: null
    }
   

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        console.log("componentDidCatch")
        this.setState({
            hasError: true
        })
    }
    
    render() {
        const { hasError } = this.state
        const {
            getPerson,
            getPersonImage,
            getStarship,
            getStarshipImage
        } = this.swapiService
        if (hasError) {
            return(
                <ErrorIndicator />
            )
        }

        const personDetails = (
            <ItemDetails 
                itemId={2}
                getData={ getPerson }
                getImageUrl={ getPersonImage }    
            />
        )
        
        const starshipDetails = (
            <ItemDetails 
                itemId={15}
                getData={ getStarship }
                getImageUrl={ getStarshipImage }    
            />
        )
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null
        return (
            <div>
                <Header />
                { planet }
                {/* <div className="row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>
                <PeoplePage /> */}
                <Row 
                    left={personDetails}
                    right={starshipDetails}
                />
            </div>
        )
        }
}