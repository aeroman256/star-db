import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'

import './item-list.css'

export default class ItemList extends Component {
    swapiService = new SwapiService

    state = {
        personList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((personList) => {
                this.setState({
                    personList
                })
            })
            .catch(this.Error)
    }

    render() {
        return (
            <div>
                <ul className='item-list list-group'>
                    <li className='list-group-item'>
                        Luke Skywalker
                    </li>
                    <li className='list-group-item'>
                        Darth Vader
                    </li>
                    <li className='list-group-item'>
                        R2-D2
                    </li>
                </ul>
            </div>
        )
    }
}
