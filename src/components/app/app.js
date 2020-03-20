import React, { Component } from 'react';

import Header from '../header'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
import PersonDetails from '../person-details'

import './app.css'


export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false,
        selectedPerson: null
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id 
        })
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    
    render() {
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
                </div>
                <div className="row">
               
                
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div>
            </div>
        )
    }
}