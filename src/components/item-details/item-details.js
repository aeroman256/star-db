import React, { Component } from 'react';
import Spinner from '../spinner'
import SwapiService from '../../services/swapi-service'
import ErrorButton from '../error-button'
import './item-details.css';

const Record = ({ item, field, label}) => {
    return(
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    )
}

export { Record }

export default class ItemDetails extends Component {
    
    swapiService = new SwapiService()

    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount(){
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {//critical!!!
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            image: this.props.getImageUrl(item),
            loading: false
        })
    }

    updateItem() {
        const { itemId, getData } = this.props
        if (!itemId) {
            return
        }
        getData(itemId)
            .then(this.onItemLoaded)
    }

    render() {
        const { loading, image, item } = this.state
        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }
        const { name } = this.state.item

        const itemView = (
            <React.Fragment>
                <img className="item-image"
                    src={ image } 
                    alt="person"
                />
                <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child, idx) => {
                        return React.cloneElement(child, { item })})}
                </ul>
                <ErrorButton />
                </div>
            </React.Fragment>
        )

        const spinner = loading ? <Spinner /> : null
        const content = !loading ? itemView : null
        return (
            <div className="item-details card">
                <React.Fragment>
                    {spinner}
                    {content}
                </React.Fragment>
            </div>
        )
    }
}
