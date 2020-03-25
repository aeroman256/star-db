import React, { Component } from 'react';
import ItemView from './person-details-view'
import Spinner from '../spinner'
import SwapiService from '../../services/swapi-service'

import './item-details.css';

export default class ItemDetails extends Component {
    
    swapiService = new SwapiService()

    state = {
        item: null,
        loading: true
    }

    componentDidMount(){
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {//critical!!!
            this.setState({
                loading: true
            })
            this.updatePerson();
        }
    }

    onPersonLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

    updatePerson() {
        const { itemId } = this.props
        if (!itemId) {
            return
        }
        this.swapiService
            .getPerson(itemId)
            .then(this.onPersonLoaded)
    }

    render() {
        const { loading } = this.state
        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }
        const spinner = loading ? <Spinner /> : null
        const content = !loading ? <ItemView  person={this.state.item} /> : null
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
