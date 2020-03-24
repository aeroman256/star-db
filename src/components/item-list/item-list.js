import React, { Component } from 'react'
import Spinner from '../spinner'

import './item-list.css'

export default class ItemList extends Component {
    // swapiService = new SwapiService()

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props
        // this.swapiService.getAllPeople()
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
            .catch(this.Error)
    }

    itemListRender = (arr) => {
        const res = arr.map(({id, name}) => {
            return (
                <li className='list-group-item'
                    key={ id }
                    onClick = {() => this.props.onItemSelected(id)}
                    >
                    { name }
                </li>
            )
        })
        return res
    }

    render() {
        const { itemList } = this.state
    
        if (!itemList) {
            return (
                <Spinner />
            )
        }
        const items = this.itemListRender(itemList)

        return (
            <div>
                <ul className='item-list list-group'>
                    { items }
                </ul>
            </div>
        )
    }
}
