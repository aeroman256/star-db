import React, { Component } from 'react'
import Spinner from '../spinner'

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

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null
        }
    
        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
                .catch(this.Error)
        }
    
        render() {
            const { data } = this.state
    
            if (!data) {
                return (
                    <Spinner />
                )
            }

            return (
                <ItemList { ...this.props } data={ data }/>
            )
        }
    }
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople)