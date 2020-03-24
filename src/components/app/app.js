import React, { Component } from 'react';

import Header from '../header'
import PeoplePage from '../people-page'
//import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
//import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'
import ErrorButton from '../error-button'

import './app.css'


export default class App extends Component {
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
        if (hasError) {
            return(
                <ErrorIndicator />
            )
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null
        return (
            <div>
                <Header />
                { planet }
                <div className="row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
                {/* 
                PeoplePage
                <div className="row">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div> */}
            </div>
        )
    }
}