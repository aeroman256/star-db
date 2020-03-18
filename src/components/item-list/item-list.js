import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'

import './item-list.css'

export default class ItemList extends Component {
    swapiService = new SwapiService()

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

    personListRender = (arr) => {
        const res = arr.map(({id, name}) => {
            return (
                <li className='list-group-item'
                    key={ id }
                    onClick = { this.props.onItemSelected}
                    >
                    { name }
                </li>
            )
        })
        return res
    }

    render() {
        const { personList } = this.state
        

        console.log('---', personList)
        if (!personList) {
            return (
                <Spinner />
            )
        }
        const items = this.personListRender(personList)

        return (
            <div>
                <ul className='item-list list-group'>
                    { items }
                </ul>
            </div>
        )
    }
}
