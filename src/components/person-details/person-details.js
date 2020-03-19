import React, { Component } from 'react';
import PersonView from './person-details-view'
import Spinner from '../spinner'
import SwapiService from '../../services/swapi-service'

import './person-details.css';

export default class PersonDetails extends Component {
    
    swapiService = new SwapiService()

    state = {
        person: null,
        loading: true
    }

    componentDidMount(){
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {//critical!!!
            this.setState({
                loading: true
            })
            this.updatePerson();
        }
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        })
    }

    updatePerson() {
        const { personId } = this.props
        if (!personId) {
            return
        }
        this.swapiService
            .getPerson(personId)
            .then(this.onPersonLoaded)
    }

    render() {
        const { loading } = this.state
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }
        const spinner = loading ? <Spinner /> : null
        const content = !loading ? <PersonView  person={this.state.person} /> : null
        return (
            <div className="person-details card">
                <React.Fragment>
                    {spinner}
                    {content}
                </React.Fragment>
            </div>
        )
    }
}
