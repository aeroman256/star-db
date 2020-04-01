import React, { Component } from 'react'
import  { withData }  from '../hoc-helpers'

import './item-list.css'
import SwapiService from '../../services/swapi-service'

const ItemList = (props) => {
   
    const { data, onItemSelected, children: renderLabel  } = props
    const items = data.map((item) => {
        const label = renderLabel(item)
        const { id } = item
        return (
            <li className='list-group-item'
                key={ id }
                onClick = {() => onItemSelected(id)}
                >
                { label }
            </li>
        )
    })

    return (
        <div>
            <ul className='item-list list-group'>
                { items }
            </ul>
        </div>
    )
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople)