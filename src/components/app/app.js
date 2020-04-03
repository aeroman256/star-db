import React, { Component } from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import Row from '../row'
import {
    PersonList,
    StarshipList,
    PlanetList,
    PersonDetails,
    StarshipDetails,
    PlanetDetails
} from '../sw-components'

import './app.css'
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details'


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
            getStarshipImage,
            getAllPeople,
            getAllStarships
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
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye color" />
                <Record field="birthYear" label="Birth Year" />
            </ItemDetails>
        )
        
        const starshipDetails = (
            <ItemDetails 
                itemId={12}
                getData={ getStarship }
                getImageUrl={ getStarshipImage }    
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Lehgth" />
                <Record field="crew" label="Crew" />
            </ItemDetails>
        )
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null
        return (
            <div>
                <Header />
                { planet }
                {/*
                <div className="row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>
                <PeoplePage /> */}
                {/* <Row 
                    left={personDetails}
                    right={starshipDetails}
                /> */}
                


                <PersonList />
                <StarshipList />
                <PlanetList />
                <PersonDetails itemId={3} />
                <PlanetDetails itemId={11} />
                <StarshipDetails itemId={5} />
            </div>
        )
        }
}
