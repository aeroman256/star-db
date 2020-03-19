import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import PlanetView from "./planet-view"
import ErrorIndicator from "../error-indicator"

import './random-planet.css';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet()
        //this.interval = setInterval(this.updatePlanet, 1100)
    }

    onPlanetLoaded = (planet) => {
        this.setState({ 
            planet,
            loading: false })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*5 + 3);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

        
    render() {
        const { planet, loading, error } = this.state

        const hasData = !(loading || error)

        const errMessage = error ? < ErrorIndicator /> : null
        const spinner = loading ? < Spinner /> : null
        const content = hasData ? <PlanetView planet={ planet }/> : null
        
        return (
        <div className="random-planet jumbotron rounded">
            { errMessage }
            { spinner }
            { content }
        </div>
        );
    }
    }

